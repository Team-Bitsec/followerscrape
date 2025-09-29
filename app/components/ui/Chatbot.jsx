"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, User } from "lucide-react";
import Link from "next/link";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  getDocs,
  where,
  Timestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../config/firebase";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [isClearing, setIsClearing] = useState(false);

  // Check authentication status using Firebase Auth
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setCurrentUser(user);
        setError(null);

        // Set up Firestore listener for messages (only from today)
        try {
          const todayStart = new Date();
          todayStart.setHours(0, 0, 0, 0);

          const q = query(
            collection(db, "conversations", user.uid, "messages"),
            where("createdAt", ">=", Timestamp.fromDate(todayStart)),
            orderBy("createdAt", "asc")
          );

          const unsubscribeMessages = onSnapshot(
            q,
            (snapshot) => {
              const msgs = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setMessages(msgs);
            },
            (error) => {
              console.error("Error listening to messages:", error);
              setError(
                "Failed to load messages. Please check your connection."
              );
            }
          );

          // Update user status
          setDoc(
            doc(db, "userStatus", user.uid),
            {
              uid: user.uid,
              displayName: user.displayName || user.email || "Anonymous",
              lastActive: serverTimestamp(),
              isActive: true,
            },
            { merge: true }
          ).catch(console.error);

          return () => unsubscribeMessages();
        } catch (error) {
          console.error("Error setting up message listener:", error);
          setError("Failed to connect to chat service.");
        }
      } else {
        setIsAuthenticated(false);
        setCurrentUser(null);
        setMessages([]);
        setError(null);

        // Update user status to offline if they were logged in before
        if (currentUser) {
          setDoc(
            doc(db, "userStatus", currentUser.uid),
            {
              uid: currentUser.uid,
              displayName:
                currentUser.displayName || currentUser.email || "Anonymous",
              lastActive: serverTimestamp(),
              isActive: false,
            },
            { merge: true }
          ).catch(console.error);
        }
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const handleSend = async () => {
    if (!isAuthenticated || !currentUser || input.trim() === "") return;

    try {
      setError(null);

      // Save message to the original structure
      await addDoc(
        collection(db, "conversations", currentUser.uid, "messages"),
        {
          sender: "user",
          content: input,
          createdAt: serverTimestamp(),
          userId: currentUser.uid,
        }
      );

      // Also save to the admin dashboard format and update user status
      await addDoc(collection(db, "chats"), {
        text: input,
        uid: currentUser.uid,
        displayName:
          currentUser.displayName || currentUser.email || "Anonymous",
        timestamp: serverTimestamp(),
        isRead: false,
        isAdmin: false,
      });

      // Update user status
      setDoc(
        doc(db, "userStatus", currentUser.uid),
        {
          uid: currentUser.uid,
          displayName:
            currentUser.displayName || currentUser.email || "Anonymous",
          lastActive: serverTimestamp(),
          isActive: true,
        },
        { merge: true }
      ).catch(console.error);

      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to send message. Please try again.");
    }
  };

  const clearChat = async () => {
    if (!isAuthenticated || !currentUser || isClearing) return;

    try {
      setIsClearing(true);
      setError(null);

      // Get all messages for this user from the original structure
      const q = query(
        collection(db, "conversations", currentUser.uid, "messages")
      );

      const snapshot = await getDocs(q);

      // Delete all messages
      const deletePromises = snapshot.docs.map((doc) => deleteDoc(doc.ref));
      await Promise.all(deletePromises);

      setMessages([]);
    } catch (error) {
      console.error("Error clearing chat:", error);
      setError("Failed to clear chat. Please try again.");
    } finally {
      setIsClearing(false);
    }
  };

  const handleInputChange = (e) => {
    if (!isAuthenticated) return;
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (!isAuthenticated) return;
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Toggle Button */}
      <button
        className="bg-orange-400 text-white p-3 rounded-full shadow-lg hover:bg-orange-400 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageCircle className="w-5 h-5" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-3 w-80 max-w-xs bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
          <div className="bg-orange-400 text-white px-4 py-2 font-semibold flex items-center justify-between">
            <span>Chatbot</span>
            <div className="flex items-center gap-2">
              {isAuthenticated && (
                <button
                  onClick={clearChat}
                  disabled={isClearing}
                  className="text-xs bg-orange-500 hover:bg-orange-600 px-2 py-1 rounded text-white disabled:opacity-50"
                  title="Clear chat history"
                >
                  {isClearing ? "Clearing..." : "Clear"}
                </button>
              )}
              {isAuthenticated && (
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-1"></div>
                  Online
                </div>
              )}
            </div>
          </div>
          <div className="h-60 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.length === 0 && !isAuthenticated && (
              <div className="text-center text-gray-500 mt-8">
                <MessageCircle className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                <p>Sign in to start a conversation</p>
              </div>
            )}
            {messages.length === 0 && isAuthenticated && !error && (
              <div className="text-center text-gray-500 mt-8">
                <MessageCircle className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                <p>Start a conversation...</p>
                <p className="text-xs mt-1">Today's messages only</p>
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={msg.id || index}
                className={`p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-100 self-end text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {msg.sender === "admin" && (
                  <div className="font-semibold text-xs mb-1 text-orange-600">
                    Admin
                  </div>
                )}
                {msg.content}
                {msg.createdAt?.toDate && (
                  <div className="text-xs text-gray-500 mt-1">
                    {msg.createdAt.toDate().toLocaleTimeString()}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Area - Conditional based on authentication */}
          {isAuthenticated ? (
            <div className="flex border-t border-gray-200">
              <input
                type="text"
                className="flex-grow px-3 py-2 text-sm outline-none"
                placeholder="Type a message..."
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button
                className="px-4 bg-orange-400 text-white text-sm hover:bg-orange-500 transition-colors"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          ) : (
            <div className="border-t border-gray-200 p-3 bg-gray-50">
              <div className="text-center">
                <User className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600 mb-3">
                  Please sign in to start chatting
                </p>
                <div className="flex gap-2 justify-center">
                  <Link href="/signIn">
                    <button className="px-3 py-1.5 bg-orange-400 text-white text-sm rounded hover:bg-orange-500 transition-colors">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/signUP">
                    <button className="px-3 py-1.5 border border-orange-400 text-orange-400 text-sm rounded hover:bg-orange-50 transition-colors">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

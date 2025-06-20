'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { text: input, fromUser: true }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Toggle Button */}
      <button
        className="bg-orange-400 text-white p-3 rounded-full shadow-lg hover:bg-orange-400 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-3 w-80 max-w-xs bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
          <div className="bg-orange-400 text-white px-4 py-2 font-semibold">
            Chatbot
          </div>
          <div className="h-60 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.fromUser
                    ? 'bg-blue-100 self-end text-right'
                    : 'bg-gray-100 text-left'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-200">
            <input
              type="text"
              className="flex-grow px-3 py-2 text-sm outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              className="px-4 bg-orange-400 text-white text-sm hover:bg-orange-400"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/firebase";

// Firebase Authentication helper functions

// Sign in with email and password
export const signInUser = async (email, password) => {
  try {
    // Check if auth is properly configured
    if (!auth || !auth.app) {
      throw new Error("Firebase Authentication is not properly configured");
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Store user info in localStorage for compatibility with existing components
    localStorage.setItem("userToken", user.accessToken);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userId", user.uid);

    // Trigger storage event to update all components
    window.dispatchEvent(new Event("storage"));

    return { success: true, user };
  } catch (error) {
    console.error("Sign in error:", error);

    // Enhanced error handling for common Firebase Auth issues
    let userFriendlyMessage = error.message;

    if (error.code === "auth/configuration-not-found") {
      userFriendlyMessage =
        "Firebase Authentication is not enabled. Please enable it in Firebase Console.";
    } else if (error.code === "auth/project-not-found") {
      userFriendlyMessage =
        "Firebase project not found. Please check your configuration.";
    } else if (error.code === "auth/invalid-api-key") {
      userFriendlyMessage =
        "Invalid Firebase API key. Please check your configuration.";
    } else if (error.code === "auth/user-not-found") {
      userFriendlyMessage = "No account found with this email address.";
    } else if (error.code === "auth/wrong-password") {
      userFriendlyMessage = "Incorrect password. Please try again.";
    } else if (error.code === "auth/invalid-email") {
      userFriendlyMessage = "Please enter a valid email address.";
    } else if (error.code === "auth/user-disabled") {
      userFriendlyMessage = "This account has been disabled.";
    }

    return { success: false, error: userFriendlyMessage, code: error.code };
  }
};

// Sign up with email and password
export const signUpUser = async (email, password) => {
  try {
    // Check if auth is properly configured
    if (!auth || !auth.app) {
      throw new Error("Firebase Authentication is not properly configured");
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Store user info in localStorage
    localStorage.setItem("userToken", user.accessToken);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userId", user.uid);

    // Trigger storage event to update all components
    window.dispatchEvent(new Event("storage"));

    return { success: true, user };
  } catch (error) {
    console.error("Sign up error:", error);

    // Enhanced error handling for common Firebase Auth issues
    let userFriendlyMessage = error.message;

    if (error.code === "auth/configuration-not-found") {
      userFriendlyMessage =
        "Firebase Authentication is not enabled. Please enable it in Firebase Console.";
    } else if (error.code === "auth/project-not-found") {
      userFriendlyMessage =
        "Firebase project not found. Please check your configuration.";
    } else if (error.code === "auth/invalid-api-key") {
      userFriendlyMessage =
        "Invalid Firebase API key. Please check your configuration.";
    } else if (error.code === "auth/email-already-in-use") {
      userFriendlyMessage = "An account with this email already exists.";
    } else if (error.code === "auth/weak-password") {
      userFriendlyMessage =
        "Password is too weak. Please choose a stronger password.";
    } else if (error.code === "auth/invalid-email") {
      userFriendlyMessage = "Please enter a valid email address.";
    }

    return { success: false, error: userFriendlyMessage, code: error.code };
  }
};

// Sign out user
export const signOutUser = async () => {
  try {
    await signOut(auth);

    // Clear localStorage
    localStorage.removeItem("userToken");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");

    // Trigger storage event to update all components
    window.dispatchEvent(new Event("storage"));

    return { success: true };
  } catch (error) {
    console.error("Sign out error:", error);
    return { success: false, error: error.message };
  }
};

// Check if user is authenticated
export const isUserAuthenticated = () => {
  const userToken = localStorage.getItem("userToken");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return userToken && isLoggedIn === "true";
};

// Get current user info
export const getCurrentUser = () => {
  if (isUserAuthenticated()) {
    return {
      email: localStorage.getItem("userEmail"),
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("userToken"),
    };
  }
  return null;
};

// Set up auth state listener
export const setupAuthListener = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      localStorage.setItem("userToken", user.accessToken || "firebase-user");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userId", user.uid);
    } else {
      // User is signed out
      localStorage.removeItem("userToken");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userId");
    }

    // Trigger storage event to update all components
    window.dispatchEvent(new Event("storage"));

    if (callback) callback(user);
  });
};

// Legacy functions for backward compatibility
export const setUserAuthenticated = (token) => {
  localStorage.setItem("userToken", token);
  localStorage.setItem("isLoggedIn", "true");
  window.dispatchEvent(new Event("storage"));
};

export const setUserLoggedOut = () => {
  signOutUser();
};

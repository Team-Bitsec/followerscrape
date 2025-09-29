// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI-Zdj9ALeWgKv4akuYHgVk4Fw5T5Hark",
  authDomain: "followerscrape-533b5.firebaseapp.com",
  projectId: "followerscrape-533b5",
  storageBucket: "followerscrape-533b5.firebasestorage.app",
  messagingSenderId: "35449410633",
  appId: "1:35449410633:web:52a2ee95f3b001b03e1b98",
  measurementId: "G-WVNYQ1PLLJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore (optional, uncomment if needed)
export const db = getFirestore(app)


// Initialize Analytics (optional, only works in browser environment)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics };
export default app;

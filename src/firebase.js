// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyBGM-aYpAx-VNus3-Axqm7zSmtY5ghJnkY",
//   authDomain: "portofoliolangsdev.firebaseapp.com",
//   projectId: "portofoliolangsdev",
//   storageBucket: "portofoliolangsdev.firebasestorage.app",
//   messagingSenderId: "211697891994",
//   appId: "1:211697891994:web:d06eaa1e9d27a32dc1bd23",
//   measurementId: "G-9LNZG16CT7",
// };
//   // Init Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // Auth
// export const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export const loginWithGoogle = () => signInWithPopup(auth, provider);
// export const logout = () => signOut(auth);

// // Firestore
// export const db = getFirestore(app);

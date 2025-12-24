import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZkHP2ZE0hyQsmqATE6MjlhD4npmgQuao",
  authDomain: "voting-platform-c9f9f.firebaseapp.com",
  projectId: "voting-platform-c9f9f",
  storageBucket: "voting-platform-c9f9f.firebasestorage.app",
  messagingSenderId: "534227272456",
  appId: "1:534227272456:web:692c4e85a651d62cc3a2bd"
};

const app = initializeApp(firebaseConfig);

// Exporting with names that match your Page files
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 
export const db = getFirestore(app);
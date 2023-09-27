// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAKIvsjvexWwT3bZWqICwS_XEbcZRQJc6Y",
  authDomain: "serviar-399502.firebaseapp.com",
  projectId: "serviar-399502",
  storageBucket: "serviar-399502.appspot.com",
  messagingSenderId: "488002383512",
  appId: "1:488002383512:web:01ef8bba4143f5d90b2aed",
  measurementId: "G-RYLHN0MRBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
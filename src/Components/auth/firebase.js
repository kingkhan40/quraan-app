// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBUfmaeHVwsAivNpLLq9cIdW_lwiOKt0ag",
  authDomain: "learn-quran-by-harry.firebaseapp.com",
  databaseURL: "https://learn-quran-by-harry-default-rtdb.firebaseio.com",
  projectId: "learn-quran-by-harry",
  storageBucket: "learn-quran-by-harry.appspot.com",
  messagingSenderId: "446326301426",
  appId: "1:446326301426:web:446ffdfb23fe152ce9266b",
  measurementId: "G-3R7RLZR203",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };

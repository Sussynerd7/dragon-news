// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTgPAyBp30R9ugF-Ephx1T3v7bTgzBpJs",
  authDomain: "dragon-news-1fc80.firebaseapp.com",
  projectId: "dragon-news-1fc80",
  storageBucket: "dragon-news-1fc80.firebasestorage.app",
  messagingSenderId: "313703801953",
  appId: "1:313703801953:web:b2da8187b56dfafdba7620"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
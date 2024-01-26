// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-kb.firebaseapp.com",
  projectId: "mern-estate-kb",
  storageBucket: "mern-estate-kb.appspot.com",
  messagingSenderId: "322706702942",
  appId: "1:322706702942:web:1a154c252899e85e0f6acf",
  measurementId: "G-RH6HRMPQBY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

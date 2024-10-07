// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "food-app-b5166.firebaseapp.com",
  projectId: "food-app-b5166",
  storageBucket: "food-app-b5166.appspot.com",
  messagingSenderId: "374260368558",
  appId: "1:374260368558:web:6fac945402fdf39a71593f",
  measurementId: "G-VVZ8LE7VTX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkCPO9kaAQwtxKIxstZ0-BQohnxdTSKWM",
  authDomain: "food-app-d6da7.firebaseapp.com",
  projectId: "food-app-d6da7",
  storageBucket: "food-app-d6da7.appspot.com",
  messagingSenderId: "738976470282",
  appId: "1:738976470282:web:8a17af2565bddaf29116f3",
  measurementId: "G-D7MTW1YV2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
const provider= new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export {auth,provider}



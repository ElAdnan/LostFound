// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbPUlGFEzCttL1pkyhAy-0A3p3PXTWXao",
  authDomain: "lostfound-4f18f.firebaseapp.com",
  projectId: "lostfound-4f18f",
  storageBucket: "lostfound-4f18f.firebasestorage.app",
  messagingSenderId: "952331085138",
  appId: "1:952331085138:web:634b0c0291adf2a510c68b",
  measurementId: "G-19QME9ECN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
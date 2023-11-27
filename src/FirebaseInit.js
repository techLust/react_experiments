// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9MKASj0oGbefSwsrxOjZ5zE75NQ2DHyU",
  authDomain: "analytics-exp-ad40b.firebaseapp.com",
  projectId: "analytics-exp-ad40b",
  storageBucket: "analytics-exp-ad40b.appspot.com",
  messagingSenderId: "61891576743",
  appId: "1:61891576743:web:66c184a7ff5b0f41392c82",
  measurementId: "G-BPVSKHM4BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
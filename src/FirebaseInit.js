// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvvWyRhR81BODxB-gao7faLHq9bHQqQNY",
  authDomain: "todo-app-bfb4d.firebaseapp.com",
  projectId: "todo-app-bfb4d",
  storageBucket: "todo-app-bfb4d.appspot.com",
  messagingSenderId: "833053529805",
  appId: "1:833053529805:web:dae28018436af990e57b84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

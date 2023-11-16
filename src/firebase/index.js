// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBCw-x9MqmJXRu1wDLbUPhRzK7g9Buyywc",
  authDomain: "pomocnycestinar.firebaseapp.com",
  projectId: "pomocnycestinar",
  storageBucket: "pomocnycestinar.appspot.com",
  messagingSenderId: "805387389889",
  appId: "1:805387389889:web:64ea3b62f288d7cb4e3d40",
  measurementId: "G-ZRZT7C5MBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, analytics, auth }
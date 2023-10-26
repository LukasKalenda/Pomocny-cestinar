// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDnl1wO-V36YDFU28N0piFwnYBFrNDZ3U0",
  authDomain: "cznet-deploy.firebaseapp.com",
  projectId: "cznet-deploy",
  storageBucket: "cznet-deploy.appspot.com",
  messagingSenderId: "879637577551",
  appId: "1:879637577551:web:c626cf402ed2d02d6e8f3a",
  measurementId: "G-X31X3NX16S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);

export { db, analytics }
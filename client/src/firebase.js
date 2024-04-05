// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-77487.firebaseapp.com",
  projectId: "mernestate-77487",
  storageBucket: "mernestate-77487.appspot.com",
  messagingSenderId: "181930203132",
  appId: "1:181930203132:web:e0fec012794ec849bec479",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

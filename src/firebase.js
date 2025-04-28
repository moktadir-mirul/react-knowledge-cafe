// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1V19H2T9KlAable15P7v4TPuzkObuSR4",
  authDomain: "recat-knowledge-cafe.firebaseapp.com",
  projectId: "recat-knowledge-cafe",
  storageBucket: "recat-knowledge-cafe.firebasestorage.app",
  messagingSenderId: "243567632412",
  appId: "1:243567632412:web:1b173884cce91173b9ffd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFF9Eixo4a4UEjHUKwyqrmLozzEtMR7A8",
  authDomain: "netflix-clone-6a05d.firebaseapp.com",
  projectId: "netflix-clone-6a05d",
  storageBucket: "netflix-clone-6a05d.appspot.com",
  messagingSenderId: "812216663790",
  appId: "1:812216663790:web:1f76d7161a551cc322bdff",
  measurementId: "G-BT37W107DZ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebaseApp);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
export default db;

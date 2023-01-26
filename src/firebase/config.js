import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBObZgJAr-BN1nR5flfbSC09jxs-8-Jm4Q",
    authDomain: "cemitt-cc856.firebaseapp.com",
    projectId: "cemitt-cc856",
    storageBucket: "cemitt-cc856.appspot.com",
    messagingSenderId: "902665149325",
    appId: "1:902665149325:web:fe978f427ba811f63e3bc4"
  };
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

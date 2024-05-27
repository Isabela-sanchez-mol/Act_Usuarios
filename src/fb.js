// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtKPFG33XQd0Sh8y3Bj6uapEXEMdNbXjE",
    authDomain: "tarea-usuarios.firebaseapp.com",
    projectId: "tarea-usuarios",
    storageBucket: "tarea-usuarios.appspot.com",
    messagingSenderId: "590456705928",
    appId: "1:590456705928:web:158964e3dd348ddf7be03d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
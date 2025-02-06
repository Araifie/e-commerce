// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOOT-KVqwNtKGV6Y9GTXt6L3CSTUvc6_8",
  authDomain: "e-commerce-f6c7d.firebaseapp.com",
  projectId: "e-commerce-f6c7d",
  storageBucket: "e-commerce-f6c7d.firebasestorage.app",
  messagingSenderId: "1053114499884",
  appId: "1:1053114499884:web:2e16b26dd76528fef16289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth} 
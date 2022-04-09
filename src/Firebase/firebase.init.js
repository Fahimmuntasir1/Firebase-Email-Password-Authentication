// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXE5AKD50wPKo5_FFsEDIN7E0I6dEAcrQ",
  authDomain: "tech-geek-71b57.firebaseapp.com",
  projectId: "tech-geek-71b57",
  storageBucket: "tech-geek-71b57.appspot.com",
  messagingSenderId: "515134740992",
  appId: "1:515134740992:web:a48ca0a5ee93dcc4c6d6e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

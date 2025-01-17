// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYmsHlivIKFkydmbR8MrOxWhwKIS4RaHs",
  authDomain: "group2-35e8e.firebaseapp.com",
  projectId: "group2-35e8e",
  storageBucket: "group2-35e8e.firebasestorage.app",
  messagingSenderId: "42603797285",
  appId: "1:42603797285:web:b6a6534ae44b95c8c418cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    export const auth=getAuth(app)
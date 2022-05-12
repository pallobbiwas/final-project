// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrIbsf5p7nIH2opDUpnnORXmmgwB5805Y",
  authDomain: "final-project-52b0d.firebaseapp.com",
  projectId: "final-project-52b0d",
  storageBucket: "final-project-52b0d.appspot.com",
  messagingSenderId: "136492900154",
  appId: "1:136492900154:web:eaa30ea8f6121b46983a03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
import firebase from "firebase/compat/app";
// auth 
import { getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArNi7-XISExzv8jD_Vv_rH9HRN53IPBL4",
  authDomain: "clone-5922f.firebaseapp.com",
  projectId: "clone-5922f",
  storageBucket: "clone-5922f.appspot.com",
  messagingSenderId: "1048983836081",
  appId: "1:1048983836081:web:bf8708b564399ac7bd1990",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

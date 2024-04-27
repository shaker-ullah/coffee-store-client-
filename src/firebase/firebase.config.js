// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRLu0DrJIeAmxhBsN0TlBS6_qT7jrdKv0",
  authDomain: "coffee-store-ee1e2.firebaseapp.com",
  projectId: "coffee-store-ee1e2",
  storageBucket: "coffee-store-ee1e2.appspot.com",
  messagingSenderId: "908739013300",
  appId: "1:908739013300:web:72cd2c63437671b43785e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
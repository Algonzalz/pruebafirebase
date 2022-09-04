// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRAcDGYjp1fJM64KWOgNJXCOaf4iBuqHI",
  authDomain: "quinielafamily.firebaseapp.com",
  projectId: "quinielafamily",
  storageBucket: "quinielafamily.appspot.com",
  messagingSenderId: "551010924869",
  appId: "1:551010924869:web:7dcdd566fc5e51eaed262c",
  measurementId: "G-RDPK66G76Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
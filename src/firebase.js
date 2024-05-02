// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHRvEPrVLEEIu1UdkM45ot5KYec_64UA8",
  authDomain: "budget-chrisen-dev.firebaseapp.com",
  databaseURL: "https://budget-chrisen-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "budget-chrisen-dev",
  storageBucket: "budget-chrisen-dev.appspot.com",
  messagingSenderId: "593304787141",
  appId: "1:593304787141:web:70c220b2cb69871c0ff8ac",
  measurementId: "G-JBQH70QRLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
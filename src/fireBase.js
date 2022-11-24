// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSugStih1QeKaCtqiLJ6Xv7fMvfi0bWLs",
  authDomain: "migros-qr.firebaseapp.com",
  projectId: "migros-qr",
  storageBucket: "migros-qr.appspot.com",
  messagingSenderId: "928247768584",
  appId: "1:928247768584:web:072c5a6b54585a3fcad3bd",
  measurementId: "G-C26Q84915Q"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
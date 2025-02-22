// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLt7O25g68gNV8KXidaQu6pg4bm4_ij48",
  authDomain: "apptest-15232.firebaseapp.com",
  projectId: "apptest-15232",
  storageBucket: "apptest-15232.firebasestorage.app",
  messagingSenderId: "750323858789",
  appId: "1:750323858789:web:6aa5970a4ef008917c758c",
  measurementId: "G-2G05QNZ0C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db};


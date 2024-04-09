// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeFIOJ4KOAFzRinicQHSaOc4uzULtrD2c",
  authDomain: "dev-event-feed-project.firebaseapp.com",
  projectId: "dev-event-feed-project",
  storageBucket: "dev-event-feed-project.appspot.com",
  messagingSenderId: "558752596978",
  appId: "1:558752596978:web:418d77fc7042592beea16b",
  measurementId: "G-YT1KTWSZPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

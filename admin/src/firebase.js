// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDW9SesGt2oSalI6crhZn1ZwFeiazbMTMw",

  authDomain: "marple-d350e.firebaseapp.com",

  projectId: "marple-d350e",

  storageBucket: "marple-d350e.firebasestorage.app",

  messagingSenderId: "252469926679",

  appId: "1:252469926679:web:d50ff41cbbec1f6897f552",

  measurementId: "G-5LTDTC9CEX"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


export default app;
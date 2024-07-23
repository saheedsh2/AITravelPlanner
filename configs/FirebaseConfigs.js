// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsy0ggP5VPRsLb3rvvqPJQ_6wrLiZ9WWs",
  authDomain: "ai-travel-planner-b366b.firebaseapp.com",
  projectId: "ai-travel-planner-b366b",
  storageBucket: "ai-travel-planner-b366b.appspot.com",
  messagingSenderId: "996198121225",
  appId: "1:996198121225:web:9ef96c27371c919e311dd8",
  measurementId: "G-8XZ6PLCD5T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

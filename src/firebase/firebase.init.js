// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSwzyEHjUumDZ-yx5gJCHQ_-_QH6zmSkM",
  authDomain: "food-service-auth.firebaseapp.com",
  projectId: "food-service-auth",
  storageBucket: "food-service-auth.firebasestorage.app",
  messagingSenderId: "779963841683",
  appId: "1:779963841683:web:0c43a938d719be611c2166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
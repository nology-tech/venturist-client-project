// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi8DZkPUYFGN7VTwUNdfwujvpDXl2VvNo",
  authDomain: "accentureclientprojecttest.firebaseapp.com",
  projectId: "accentureclientprojecttest",
  storageBucket: "accentureclientprojecttest.appspot.com",
  messagingSenderId: "1031859429341",
  appId: "1:1031859429341:web:004c792e939c03a6b1a034",
  measurementId: "G-TYQ68GPY5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
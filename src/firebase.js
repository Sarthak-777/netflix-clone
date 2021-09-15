// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDa7AidfK_0oTJiAgVK9-iTAo1Mco1P2w",
  authDomain: "netflix-clone-524e6.firebaseapp.com",
  projectId: "netflix-clone-524e6",
  storageBucket: "netflix-clone-524e6.appspot.com",
  messagingSenderId: "136759931818",
  appId: "1:136759931818:web:ca28d5643288183e6af1d3",
  measurementId: "G-9LR2CQWS1Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

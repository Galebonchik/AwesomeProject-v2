// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcJoET8EMW3m1hWfvBpgtJXejIyFZhwrU",
  authDomain: "awesomeproject-e28fa.firebaseapp.com",
  databaseURL: "https://awesomeproject-e28fa-default-rtdb.firebaseio.com",
  projectId: "awesomeproject-e28fa",
  storageBucket: "awesomeproject-e28fa.appspot.com",
  messagingSenderId: "658098571487",
  appId: "1:658098571487:web:dcaf21466041d6b391816a",
  measurementId: "G-97Q3BRL815"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use /https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQfVa2D2OrInbPa2PR5ipS5bvEm0zWGbk",
  authDomain: "aime-461c7.firebaseapp.com",
  projectId: "aime-461c7",
  storageBucket: "aime-461c7.appspot.com",
  messagingSenderId: "761500160685",
  appId: "1:761500160685:web:adc23c687c0a8b1eccec24",
  measurementId: "G-VG156NYE9L",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const analytics = getAnalytics(app);

export {};

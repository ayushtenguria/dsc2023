// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDapAS1xwRfUEIAz9VIPX_A7GirndYT-o",
  authDomain: "dsc17oct23.firebaseapp.com",
  projectId: "dsc17oct23",
  storageBucket: "dsc17oct23.appspot.com",
  messagingSenderId: "558208348381",
  appId: "1:558208348381:web:ab250d20b3178c0f106b34",
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// firebase.js

// firebase.js

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;

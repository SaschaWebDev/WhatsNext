import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVe4IoFM4SUFb39TEduGLgA5uUPRUmgZg",
  authDomain: "whatsnext-18920.firebaseapp.com",
  projectId: "whatsnext-18920",
  storageBucket: "whatsnext-18920.appspot.com",
  messagingSenderId: "1088396034778",
  appId: "1:1088396034778:web:dacfb1fee3314dbbbc5be3",
  measurementId: "G-S0XEYV9Q06",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

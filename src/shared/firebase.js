import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrcsnA3sBodNKw3nv6pfrXxITNMjig_YU",
  authDomain: "practice-a5323.firebaseapp.com",
  projectId: "practice-a5323",
  storageBucket: "practice-a5323.appspot.com",
  messagingSenderId: "932797191664",
  appId: "1:932797191664:web:78efc6b6d32e9eccebb935",
  measurementId: "G-ZHJCF988MG"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export { auth, apiKey };
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA6OajONOeZaLAFuNQr4twietqnGr96aCQ",
    authDomain: "insta-reel-57727.firebaseapp.com",
    projectId: "insta-reel-57727",
    storageBucket: "insta-reel-57727.appspot.com",
    messagingSenderId: "181241637187",
    appId: "1:181241637187:web:83ed5efe05d5022b27a7f6",
    measurementId: "G-ZBFBGJP7ZH"
  };


const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

export default db;
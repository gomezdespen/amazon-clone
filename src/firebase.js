import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBWZIJ8OggkLduTHTYo9XxAuY0xpmH7TbI",
    authDomain: "clone-d3a88.firebaseapp.com",
    projectId: "clone-d3a88",
    storageBucket: "clone-d3a88.appspot.com",
    messagingSenderId: "146456712792",
    appId: "1:146456712792:web:e46047d7c1413e58d91c2d",
    measurementId: "G-TSWFZ2WVQK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };


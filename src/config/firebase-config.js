import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyD8Lkn3Pw9gMe1Zo5lyGpFTL3XWnHhzZ-U",
    authDomain: "redfin-dashboard.firebaseapp.com",
    projectId: "redfin-dashboard",
    storageBucket: "redfin-dashboard.appspot.com",
    messagingSenderId: "910485053654",
    appId: "1:910485053654:web:25cac5b84bec03cf722977",
    measurementId: "G-QRJ7EF676F"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



  export default firebase;
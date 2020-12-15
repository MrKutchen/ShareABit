import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAoiehw75_5vEKFDfwwfGbnn8MZfKDGxFo",
    authDomain: "swiping-interface.firebaseapp.com",
    projectId: "swiping-interface",
    storageBucket: "swiping-interface.appspot.com",
    messagingSenderId: "614607043444",
    appId: "1:614607043444:web:f09406558e2be1bbd74a21",
    measurementId: "G-YP2GV7LRHB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default  database;
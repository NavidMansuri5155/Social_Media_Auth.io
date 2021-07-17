import firebase from "firebase";

// Firebase Confing
const firebaseConfig = {
    apiKey: "AIzaSyBeXXqjI7Z6rGM8uSka7ieoHLQdKRJm_Ds",
    authDomain: "react-aut-social-media.firebaseapp.com",
    projectId: "react-aut-social-media",
    storageBucket: "react-aut-social-media.appspot.com",
    messagingSenderId: "60446922633",
    appId: "1:60446922633:web:377a34bd8184d249be7358",
    measurementId: "G-CS1L1051P8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
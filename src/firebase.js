import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let fireConfig = {
    apiKey: "AIzaSyB0AT16i51AorpbT2H1Mu-8IzHR5W3buqU",
    authDomain: "vuefire-8d5a5.firebaseapp.com",
    projectId: "vuefire-8d5a5",
    storageBucket: "vuefire-8d5a5.appspot.com",
    messagingSenderId: "697289939745",
    appId: "1:697289939745:web:19da291666caafae1cbc60",
    measurementId: "G-FGQWYK2PCX"
};

firebase.initializeApp(fireConfig);

export const db = firebase.firestore();
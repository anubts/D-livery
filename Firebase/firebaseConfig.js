import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl3ucLwm_J3N7ZJMQVtqJ2brvGYho60-U",
  authDomain: "d-livery-c8eef.firebaseapp.com",
  projectId: "d-livery-c8eef",
  storageBucket: "d-livery-c8eef.appspot.com",
  messagingSenderId: "774911850841",
  appId: "1:774911850841:web:4ef5fd2783e876ae1d3448"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
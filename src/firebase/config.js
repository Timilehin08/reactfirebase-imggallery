import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJn85reJkcp4eDVR2AtEXATqLUESKcOo0",
    authDomain: "timi-fogogram.firebaseapp.com",
    projectId: "timi-fogogram",
    storageBucket: "timi-fogogram.appspot.com",
    messagingSenderId: "978368105640",
    appId: "1:978368105640:web:c8d49d3c0e528e6f6bc69d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
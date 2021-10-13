import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmSDrwWLPLj3moPx_gYDNylOKbcqjuAjU",
    authDomain: "timi-imggallerygram.firebaseapp.com",
    projectId: "timi-imggallerygram",
    storageBucket: "timi-imggallerygram.appspot.com",
    messagingSenderId: "258842614972",
    appId: "1:258842614972:web:1b59c2d8afcb76923144b9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
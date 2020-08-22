import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCqetN8ArjT3zowfZhXNG5diAHZijHez9w",
    authDomain: "messenger-696.firebaseapp.com",
    databaseURL: "https://messenger-696.firebaseio.com",
    projectId: "messenger-696",
    storageBucket: "messenger-696.appspot.com",
    messagingSenderId: "986252950117",
    appId: "1:986252950117:web:f655f66cb3ff564b75e48c",
    measurementId: "G-CLXWBTMBFC"
});

const db = firebaseApp.firestore();

export default db;
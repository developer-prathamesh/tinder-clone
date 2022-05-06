import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAUFZLPs4mvVYk8jSr3bsr6K1AQfFWe0no",
    authDomain: "tinder-clone-77218.firebaseapp.com",
    projectId: "tinder-clone-77218",
    storageBucket: "tinder-clone-77218.appspot.com",
    messagingSenderId: "530962252316",
    appId: "1:530962252316:web:2ea7aa84ea7371c29ed5d9",
    measurementId: "G-2K3QYGRZE0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore()

export default db;
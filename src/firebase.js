
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyACZFVd6zxb1jq-m3KuRnEG5Zit3JaSXMY",
    authDomain: "ecommerce-website-8092f.firebaseapp.com",
    projectId: "ecommerce-website-8092f",
    storageBucket: "ecommerce-website-8092f.appspot.com",
    messagingSenderId: "639603010857",
    appId: "1:639603010857:web:1c91d2215accb807f59b38"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider };
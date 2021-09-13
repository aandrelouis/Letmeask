import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALhzIVyiLb_jVwkpQUGPlptZelNTQeGc8",
    authDomain: "letmeask-a87ea.firebaseapp.com",
    databaseURL: "https://letmeask-a87ea-default-rtdb.firebaseio.com",
    projectId: "letmeask-a87ea",
    storageBucket: "letmeask-a87ea.appspot.com",
    messagingSenderId: "539823980396",
    appId: "1:539823980396:web:2826204fb06f53fd457d49"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

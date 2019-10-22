import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB4k1G9UBEqXoQWzo0Koy0xDlvSUGYHP0E",
  authDomain: "react-slack-3838e.firebaseapp.com",
  databaseURL: "https://react-slack-3838e.firebaseio.com",
  projectId: "react-slack-3838e",
  storageBucket: "react-slack-3838e.appspot.com",
  messagingSenderId: "572215896651",
  appId: "1:572215896651:web:3530825415d6ad3ac33bce",
  measurementId: "G-E7PCYRHJSC"
};
firebase.initializeApp(firebaseConfig);

export default firebase
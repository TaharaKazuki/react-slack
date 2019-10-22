import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCLM-9otAYtiOXIsGbTVsYAbA-b3uoEn4s",
  authDomain: "react-slack-85b88.firebaseapp.com",
  databaseURL: "https://react-slack-85b88.firebaseio.com",
  projectId: "react-slack-85b88",
  storageBucket: "react-slack-85b88.appspot.com",
  messagingSenderId: "904417232514",
  appId: "1:904417232514:web:a33a7dc64278ac14"
};
firebase.initializeApp(firebaseConfig);

export default firebase
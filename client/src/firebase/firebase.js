import firebase from 'firebase';
require("dotenv").config();

// NOTE: Before this goes live, these should be set as secret keys in environment variables
const config = {
  apiKey: `${process.env.FIREBASE_ID}`,
  authDomain: 'findmarketplays-f8556.firebaseapp.com',
  databaseURL: 'https://findmarketplays-f8556.firebaseio.com',
  projectId: 'findmarketplays-f8556',
  storageBucket: 'findmarketplays-f8556.appspot.com',
  messagingSenderId: '230930291400',
};

firebase.initializeApp(config);
export default firebase;
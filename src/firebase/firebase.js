import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCU32UjFCylBIswXOL2mSkj01xsr3T5eWE',
  authDomain: 'findmarketplays-f8556.firebaseapp.com',
  databaseURL: 'https://findmarketplays-f8556.firebaseio.com',
  projectId: 'findmarketplays-f8556',
  storageBucket: 'findmarketplays-f8556.appspot.com',
  messagingSenderId: '230930291400',
};

firebase.initializeApp(config);
export default firebase;

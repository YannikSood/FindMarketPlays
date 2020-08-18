import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCU32UjFCylBIswXOL2mSkj01xsr3T5eWE",
    authDomain: "findmarketplays-f8556.firebaseapp.com",
    databaseURL: "https://findmarketplays-f8556.firebaseio.com",
    projectId: "findmarketplays-f8556",
    storageBucket: "findmarketplays-f8556.appspot.com",
    messagingSenderId: "230930291400"
  };
   
class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
   
export default Firebase;
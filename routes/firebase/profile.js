const firebase = require('../../firebase/firebase');
const express = require("express"),
app = express();

const router = express.Router();

router.get('/profile/fetchEmail', (req, res) => {
    let email = firebase.auth().currentUser.email

    res.send({ message: email })
})

router.put(`/profile/resetEmail/:email`, (req, res) => {
    let user = firebase.auth().currentUser;
    let email = req.params.email;
    user.updateEmail(email);

    res.send({ message: email });
})

router.put(`/profile/resetPassword`, (req, res) => {
    let auth = firebase.auth();
    let user = auth.currentUser;
    res.send( {message: user })
    // console.log(user)
    let email = user.email;

    auth.sendPasswordResetEmail(email);

    // res.send({ message: "Email sent"});
})

// router.get()

module.exports = router;
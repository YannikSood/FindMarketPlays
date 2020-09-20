// var CronJob = require("cron").CronJob;
// import nodemailer from "nodemailer";
// import firebase from "../../firebase/firebase";
// import React, { useState, useEffect, Fragment } from "react";
// import { connect } from "react-redux";

// const emailNotification = ({currentUser}) => {
//     let ref = firebase.database().ref(`users/${currentUser.id}`);

//     ref.once('value')
//         .then(snapshot => {
//             let data = snapshot.val();
//             let time = data.time;

//             // start cron job here

//             let job = new CronJob('')
//         })

// }

// const MSTP = state => ({
//     currentUser: state.auth.currentUser
// })

// export default connect(MSTP)(emailNotification)


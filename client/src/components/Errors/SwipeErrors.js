import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import firebase from '../../firebase/firebase';
import '../../css/Errors.css';


function SwipeErrors({currentUser}) {
  const ref = firebase.database().ref(`users/${currentUser.id}`);
  const [timeHR, setTimeHR] = useState(4);
  const [timeMIN, setTimeMIN] = useState(0);

  ref.once('value')
    .then(snapshot => {
      let data = snapshot.val();
      let nextTime = data.time;
      let currentTime = Date.now();
      let remainingTimeMS = nextTime - currentTime;
      let remainingTimeHRS = Math.floor(remainingTimeMS / 1000 / 60 / 60);
      let remainingTimeMIN = Math.floor((remainingTimeMS / 1000 / 60) % 60);
      if (nextTime != 0 && remainingTimeMS < 0) remainingTimeMS = 0;

      setTimeHR(remainingTimeHRS);
      setTimeMIN(remainingTimeMIN);
    })
    .catch(err => console.log(err));
    
    const link = `https://www.findmarketplays.com/register/${currentUser.id}`;
      return (
        <Container>
          <Alert className="d-flex justify-content-center mt-3" variant="danger">
            You've hit your swipe limit! Please come back in {timeHR} hours and {timeMIN} minutes. Or unlock unlimited swipes by inviting a friend with the following link:
          </Alert>
          <Alert className="d-flex justify-content-center mt-3" variant="danger">
            <span id="shared-link">{link}</span>
          </Alert>
        </Container>
      );

}

const MSTP = state => ({
  currentUser: state.auth.currentUser
})

export default connect(MSTP)(SwipeErrors);

import React from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import '../../css/Errors.css';


function SwipeErrors({currentUser}) {
  const link = `https://www.findmarketplays.com/register/${currentUser.id}`;
    return (
      <Container>
        <Alert className="d-flex justify-content-center mt-3" variant="danger">
          You've hit your swipe limit! Please come back in 4 hours. Or share the
          following link to unlock unlimited swipes for 4 hours:
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

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import Form from 'react-bootstrap/Form';
import * as ProfileAPI from '../../util/profileAPI';
import { useState, useEffect } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import ResetErrors from '../Errors/ResetErrors';
import ResetSuccess from '../Success/ResetSuccess';
import PasswordSuccess from '../Success/PasswordSuccess';


const Profile = ({ currentUser }) => {
  const [emailFlag, emailSwitch] = useState(false);
  const [emailValue, setEmail] = useState(currentUser.email);
  const [tempEmail, setTempEmail] = useState();
  const [resetErrors, setErrors] = useState({});
  const [resetSuccess, setSuccess] = useState(false);

  useEffect(() => {
    setEmail(firebase.auth().currentUser.email);
    setSuccess(false);
  }, [])

  function resetEmail() {
    ProfileAPI.emailReset(tempEmail)
    .then((res) => {
      setEmail(tempEmail)
      emailSwitch(false)
      setSuccess(true)
    })
    .catch(error => {
        setErrors(error)
      })
  };

  function resetPassword() {
    ProfileAPI.passwordReset()
      .then((res) => {
        setSuccess(true)
      })
      .catch((error) => {
        setErrors(error)
      })
  }

  function handleChange(e) {
    setTempEmail(e.currentTarget.value)
  }

  function emailComponent() {
    if (emailFlag) {
      return (
          <Form>
            {ResetErrors(resetErrors)}
            <Form.Group>
              <Form.Label>
                Email Address
              </Form.Label>
              <Form.Control
                placeholder={emailValue}
                onChange={(e) => handleChange(e)}
              >

              </Form.Control>
            </Form.Group>
            <Button onClick={() => resetEmail()}>
              Save
            </Button>
            <Button onClick={() => emailSwitch(false)}>
              Cancel
            </Button>
          </Form>
      )
    } else {
      return (
        <Container>
          {ResetSuccess(resetSuccess)}
          {ResetErrors(resetErrors)}
          <Row>
            <Col>
              Email:
            </Col>
            <Col>
              {emailValue}
            </Col>
            <Button onClick={() => emailSwitch(true)}>
              Reset
            </Button>
          </Row>
          <Row>
            <Col>
              Password:
          </Col>
            <Col>
              ****
          </Col>
            <Button onClick={() => resetPassword()}>
              {/* will immediately send, and then needs an alert, "Email sent" */}
            Reset
          </Button>
          </Row>
        </Container>
      )
    }

  }

  return (
    <div className="About">
      <Container fluid>
        <Row>
          <Col>
            <h1>My Account Settings</h1>
          </Col>
        </Row>

        {emailComponent()}
        
      </Container>
    </div>
  )
};

const MSTP = (state) => {
  let auth = state.auth;

  return {
    currentUser: auth.currentUser
  };
}

export default connect(MSTP)(Profile);



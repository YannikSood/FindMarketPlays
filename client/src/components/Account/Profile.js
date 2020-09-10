import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as ProfileAPI from '../../util/profileAPI';
import { useState, useEffect } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import ResetErrors from '../Errors/ResetErrors';
import EmailSuccess from '../Success/EmailSuccess';
import PasswordSuccess from '../Success/PasswordSuccess';
import { useHistory } from "react-router-dom";
import Axios from "axios";

const Profile = ({ currentUser, isAuthed }) => {

  const [profile, setProfile] = useState();
  const [emailFlag, emailSwitch] = useState(false);
  const [emailValue, setEmail] = useState(currentUser.email);
  const [tempEmail, setTempEmail] = useState();
  const [resetErrors, setErrors] = useState({});
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [passwordSuccess, setPassSuccess] = useState(false);
  const history = useHistory();

  useEffect(() => {
     if (!isAuthed) {
       history.push("/login")
    } else {
      // let url = '/firebase/profile/fetchEmail'
      // Axios.get(url, {
      //   headers: { "Content-Type": "application/json" }
      // })
      //   // .then(res => {
      //     // })
      //     // .catch(err => console.log(err));
      //   }
        // setEmail(res.message);
      setEmail(firebase.auth().currentUser.email);
      setEmailSuccess(false);
      setPassSuccess(false);
    }
  }, [isAuthed, history]);

  function resetEmail() {
    // let url = `/profile/resetEmail/${tempEmail}`;
    // Axios.put(url, {
    //   headers: { "Content-Type": "application/json" }
    // })
    ProfileAPI.emailReset(tempEmail)
    .then((res) => {
      setEmail(tempEmail);
      emailSwitch(false);
      setEmailSuccess(true);
      setErrors({});
      if (passwordSuccess) {
        setPassSuccess(false);
      };
    })
    .catch(error => {
        setErrors(error);
      })
  };

  function resetPassword() {
    // let url = `/profile/resetPassword`;
    // Axios.put(url, {
    //   headers: { "Content-Type": "application/json" }
    // })
    ProfileAPI.passwordReset()
      .then((res) => {
        setPassSuccess(true);
        setErrors({});
        if (emailSuccess) {
          setEmailSuccess(false);
        }
      })
      .catch((error) => {
        setErrors(error);
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
                <h2>
                  Email Address
                </h2>
              </Form.Label>
              <Form.Control
                placeholder={emailValue}
                onChange={(e) => handleChange(e)}
              >
              </Form.Control>
            </Form.Group>
            <Button className="mt-4" onClick={() => resetEmail()}>
              Save
            </Button>
            <Button className="mt-4 ml-2" variant="secondary" onClick={() => emailSwitch(false)}>
              Cancel
            </Button>
          </Form>
      )
    } else {
      return (
        <Container>
          {EmailSuccess(emailSuccess)}
          {PasswordSuccess(passwordSuccess)}
          {ResetErrors(resetErrors)}
          <Row >
            <Col >
              <h5 className="border border-white rounded pl-3 pb-2 pt-2" >
                Email: <h6>{emailValue}</h6>  
              </h5> 
              
              <Button className="mt-2" onClick={() => emailSwitch(true)}>
                Reset Email
              </Button>{'  '}

              <Button className="mt-2" onClick={() => resetPassword()}>
                Reset Password
              </Button>
            </Col>
          </Row>
        </Container>
      )
    }

  }

  return (
    <div className="About">
      <Container fluid>
        <Row>
          <Col align="center">
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
    currentUser: auth.currentUser,
    isAuthed:  auth.isAuthed
  };
}

export default connect(MSTP)(Profile);



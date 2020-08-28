import React, { useState, useEffect, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as ROUTES from '../../routes/routes';
import firebase from '../../firebase/firebase';
import RegisterErrors from '../Errors/RegisterError';

const Register = ({ isAuthed }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const history = useHistory();
  const [registerErrors, setErrors] = useState({});

  useEffect(() => {
    if (isAuthed) history.push('/');
  }, [isAuthed, history]);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = credentials;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('Success signing up', user);
      })
      .catch((error) => {
        // Handle Errors here.
        setErrors(error);
      });
  };
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <h1>Register to access the full platform.</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          {RegisterErrors(registerErrors)}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} value={credentials.email} />
                <Form.Text className="text-muted">
                  We&apos;ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} value={credentials.password} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button href={ROUTES.LOGIN} variant="secondary">Back to Login</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button href={ROUTES.FORGOT_PASSWORD} variant="link">Forgot Password</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    isAuthed: auth.isAuthed,
  };
};
export default connect(mapStateToProps)(Register);

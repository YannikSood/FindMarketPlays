import React, { useState, Fragment, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../routes/routes';
import firebase from '../../firebase/firebase';

const ForgotPassword = ({ isAuthed }) => {
  const [credentials, setCredentials] = useState({ email: '' });
  const history = useHistory();

  useEffect(() => {
    if (isAuthed) history.push('/');
  }, [isAuthed, history]);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email } = credentials;
    firebase.auth().sendPasswordResetEmail(email)
      .then((user) => {
        // Consider using a redirect with history.push('/login') here and displaying a message via props
        alert('Please check your email...');
      }).catch((e) => {
        console.log(e);
      });
  };
  return (
    <Fragment>
      <Container>

        <Row>
          <Col>
            <h1>Reset Password</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} value={credentials.email} />
                <Form.Text className="text-muted">
                  We&apos;ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>

            </Form>
          </Col>
        </Row>

        <Row>
          <Col>

            <Button className="mt-2" href={ROUTES.LOGIN} variant="secondary">Login Page </Button>

          </Col>
        </Row>

        <Row>
          <Col>

            <Button className="mt-2" href={ROUTES.REGISTER} variant="secondary">Register Page</Button>

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
export default connect(mapStateToProps)(ForgotPassword);

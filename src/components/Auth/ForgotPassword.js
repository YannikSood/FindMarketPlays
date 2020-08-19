import React, { useState, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as ROUTES from '../../routes/routes';
import firebase from '../../firebase/firebase';

const ForgotPassword = () => {

    const [credentials, setCredentials] = useState({ email: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email } = credentials;
        firebase.auth().sendPasswordResetEmail(email)
        .then(function (user) {
            alert('Please check your email...')
        }).catch(function (e) {
            console.log(e)
        })
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
          
          <Button href={ROUTES.LOGIN}variant="secondary">Login Page </Button>

          </Col>
        </Row>

        <Row>
          <Col>

          <Button href={ROUTES.REGISTER} variant="secondary">Register Page</Button>

          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ForgotPassword;
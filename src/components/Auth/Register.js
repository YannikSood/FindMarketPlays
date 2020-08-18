import React, { useState, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {

    // onSubmit = event => {
    //     const { email, password } = this.state;

    //     this.props.firebase
    //     .doSignInWithEmailAndPassword(email, password)
    //     .then(() => {
    //         this.setState({ ...INITIAL_STATE });
    //         this.props.history.push(ROUTES.HOME);
    //     })
    //     .catch(error => {
    //         this.setState({ error });
    //     });

    //     event.preventDefault();
    // };
  return (
    <Fragment>
      <Container>

        <Row>
          <Col>
          <h1>Register</h1>
          </Col>
        </Row>

        <Row>
            <Col>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="success" type="submit">
                    Submit
                </Button>
                
            </Form>
            </Col>
        </Row>

        <Row>
            <Col>
                <Button href="/login" variant="primary">Login Page </Button>

                <Button href="/forgotPassword" variant="secondary">Forgot Password</Button>
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Register;
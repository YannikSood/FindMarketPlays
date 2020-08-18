import React, { useState, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as ROUTES from '../../routes/routes';

const ForgotPassword = () => {

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
          <h1>Reset Password</h1>
          </Col>
        </Row>

        <Row>
            <Col>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    You will get an email to reset your password.
                    </Form.Text>
                </Form.Group>
                
                <Button variant="success" type="submit">
                    Submit
                </Button>
                
                {/* <Button href="/login">Login</Button>
                <Button href="/register">Register</Button> */}
            </Form>
            </Col>
        </Row>

        <Row>
            <Col>
                <Button href={ROUTES.LOGIN}variant="primary">Login Page </Button>

                <Button href={ROUTES.REGISTER} variant="secondary">Register</Button>
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ForgotPassword;
import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import firebase from '../../firebase/firebase';

const Logout = () => {
    const handleSubmit = () => {
        firebase.auth.signOut()
    };

    return (
    <Fragment>
      <Container>

        <Row>
          <Col>
            <h1>Are you sure?</h1>
          </Col>
        </Row>

        {/* <Row>
          <Col>

            <Form onSubmit={handleSubmit}>

              <Button variant="success" type="submit">
                Sign Out
              </Button>

            </Form>

          </Col>
        </Row> */}

      </Container>
    </Fragment>
    )

};
export default Logout;

import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import { Redirect } from 'react-router-dom';
import ScrollingWidget from './Widgets/ScrollingWidget';
import * as ROUTES from '../routes/routes';
import firebase from '../firebase/firebase';

const Notes = ({ isAuthed, currentUser }) => {
  // Hooks
  const [inputValue, setInputValue] = useState('');
  // Handlers
  const handleSubmit = () => {
    if (currentUser) {
      const data = {
        note: inputValue,
        userId: currentUser.id,
      };
      console.log('Payload for note submission: ', inputValue); // eslint-disable-line
      firebase.database().ref('notes').set(data);
      setInputValue('');
    } else {
      console.log('Error: User not logged in');
    }
  };

  return (
    <Fragment>
      <ScrollingWidget />
      <Container>
        <Row>
          <Col>
            <ReactQuill
              theme="snow"
              value={inputValue}
              onChange={setInputValue}
              id="notes-container"
              placeholder="Compose a note..."
            />
            <div className="center-block m-2">
              <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </Col>
        </Row>
      </Container>
      <div>{isAuthed ? <Redirect to={ROUTES.NOTES} /> : <Redirect to={ROUTES.LOGIN} />}</div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    currentUser: auth.currentUser,
  };
};
export default connect(mapStateToProps)(Notes);

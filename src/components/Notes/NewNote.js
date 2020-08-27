import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import { useHistory } from 'react-router-dom';
import ScrollingWidget from '../Widgets/ScrollingWidget';
import * as ROUTES from '../../routes/routes';
import firebase from '../../firebase/firebase';

const NewNote = ({ isAuthed, currentUser }) => {
  // Hooks
  const history = useHistory();
  const [bodyValue, setBodyValue] = useState('');
  const [titleValue, setTitleValue] = useState('');

  useEffect(() => {
    if (!isAuthed) {
      history.push(ROUTES.LOGIN);
    }
  }, [isAuthed, history]);

  // Handlers
  const handleSubmit = () => {
    if (currentUser) {
      console.log('Payload for note submission: ', bodyValue); // eslint-disable-line
      const newNoteKey = firebase.database().ref('notes').push().key;
      const data = {
        title: titleValue,
        body: bodyValue,
        createdBy: currentUser.id,
        createdAt: new Date().getTime(),
        id: newNoteKey,
      };
      const updates = {};
      updates[`/notes/${newNoteKey}`] = data;
      updates[`/user-notes/${currentUser.id}/${newNoteKey}`] = data;

      firebase.database().ref().update(updates)
        .then(() => {
          setBodyValue('');
          setTitleValue('');
          history.push('/notes');
        })
        .catch(err => console.log('error posting note: ', err));
    } else {
      console.log('Error: User not logged in');
    }
  };

  const handleCancel = () => {
    setBodyValue('');
    setTitleValue('');
    history.push('/notes');
  };

  return (
    <Fragment>
      <ScrollingWidget />
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={titleValue}
                  onChange={e => setTitleValue(e.target.value)}
                  placeholder="Title"
                />
              </Form.Group>
            </Form>
            <ReactQuill
              theme="snow"
              value={bodyValue}
              onChange={setBodyValue}
              id="notes-container"
              placeholder="Compose a note..."
            />
            <Button className="mr-3 mt-4" variant="primary" onClick={handleSubmit}>Create</Button>
            <Button className="mr-3 mt-4" variant="secondary" onClick={handleCancel}>Cancel</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    currentUser: auth.currentUser,
    isAuthed: auth.isAuthed,
  };
};
export default connect(mapStateToProps)(NewNote);

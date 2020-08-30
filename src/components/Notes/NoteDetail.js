import React, { useEffect, useState, Fragment } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import ScrollingWidget from '../Widgets/ScrollingWidget';
import firebase from '../../firebase/firebase';
import Loader from '../Loader';
import { receiveNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";

const NoteDetail = ({currentUser, addNote }) => {
  // Hooks

  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState([]);
  const slug = useParams();
  useEffect(() => {
    firebase
      .database()
      .ref(`/user-notes/${currentUser.id}/${slug.id}`)
      .once("value")
      .then((snapshot) => {
        setNote(snapshot?.val());
        dispatch(receiveNote(snapshot?.val()));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error fetching note: ", err);
        setIsLoading(false);
      });
  }, [slug.id]);
  // Handlers

  let updates = {};
  updates[`/notes/${note.id}`] = note;
  updates[`/user-notes/${currentUser.id}/${note.id}`] = note;

  function component() {
    return (
      <Container>
        <Row className="mb-3">
          <Col className="d-flex justify-content-between">
            <h1 className="d-inline-block">{note.title}</h1>
            <div>
              <Button
                variant="primary"
                onClick={() => {
                  history.push(`/note/edit/${slug.id}`);
                }}
              >
                Edit
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  firebase
                    .database()
                    .ref(`/user-notes/${currentUser.id}/${note.id}`)
                    .remove()
                    .then(() => history.push(`/notes`))
                    .catch((err) => "Cannot delete");
                }}
              >
                Delete
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  history.push(`/notes`);
                }}
              >
                Back
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div dangerouslySetInnerHTML={{ __html: note.body }} />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Fragment>
      <ScrollingWidget />
      {isLoading ? (
        <Loader />
      ) : (
        component()
      )}
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

const mapDispatchToProps = dispatch => ({
  addNote: (note) => dispatch(receiveNote(note))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);

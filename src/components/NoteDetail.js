import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import ScrollingWidget from './Widgets/ScrollingWidget';
import firebase from '../firebase/firebase';
import Loader from './Loader';

const NoteDetail = () => {
  // Hooks
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState([]);
  const slug = useParams();
  useEffect(() => {
    firebase.database().ref(`/notes/${slug.id}`).once('value')
      .then((snapshot) => {
        setNote(snapshot?.val());
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('error fetching note: ', err);
        setIsLoading(false);
      });
  }, []);
  // Handlers


  return (
    <Fragment>
      <ScrollingWidget />
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Row className="mb-3">
            <Col className="d-flex justify-content-between">
              <h1 className="d-inline-block">{note.title}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div dangerouslySetInnerHTML={{ __html: note.body }} />
            </Col>
          </Row>
        </Container>
      )}
    </Fragment>
  );
};

export default NoteDetail;

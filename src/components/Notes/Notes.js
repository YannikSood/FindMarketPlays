import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Row, Col, Container, Button, Table } from 'react-bootstrap';
import { formattedDateDifference } from '../../helpers/DateHelper';
import ScrollingWidget from '../Widgets/ScrollingWidget';
import firebase from '../../firebase/firebase';
import Loader from '../Loader';

const Notes = ({ currentUser, isAuthed }) => {
  // Hooks
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (!isAuthed) {
      history.push("/login");
    } else {
      firebase
        .database()
        .ref(`/user-notes/${currentUser.id}`)
        .once("value")
        .then((snapshot) => {
          setNotes(Object.values(snapshot?.val()) || []);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("error fetching notes: ", err);
          setIsLoading(false);
        });
    }
  }, [isAuthed, history, currentUser.id]);

  // useEffect(() => {
  //   firebase.database().ref(`/user-notes/${currentUser.id}`).once('value')
  //     .then((snapshot) => {
  //       setNotes(Object.values(snapshot?.val()) || []);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log('error fetching notes: ', err);
  //       setIsLoading(false);
  //     });
  // }, [currentUser.id]);
  // Handlers

  const renderNotes = () => {
    if (notes.length === 0) return <Row><Col><p>Nothing here yet...</p></Col></Row>;
    return notes.map(note => (
      <tr key={note.id}>
          <td>
            <Link className="note-title" to={`/note/${note.id}`}>{note.title}</Link>
          </td>
        <td style={{ width: '25%' }}>{formattedDateDifference(note.createdAt)}</td>
      </tr>
    ));
  };

  return (
    <Fragment>
      <ScrollingWidget />
      <Container>
        <Row className="mb-3">
          <Col className="d-flex justify-content-between">
            <h1 className="d-inline-block">Notes</h1>
            <div>
              <Button variant="primary" onClick={() => history.push('/note/new')}>Create</Button>
            </div>
          </Col>
        </Row>
        {isLoading ? (
          <Loader />
        ) : (
          <Table striped bordered hover variant="dark">
            <tbody>
              <tr>
                <th>Title</th>
                <th style={{ width: '25%' }}>Posted</th>
              </tr>
              {renderNotes()}
            </tbody>
          </Table>
        )}
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
export default connect(mapStateToProps)(Notes);

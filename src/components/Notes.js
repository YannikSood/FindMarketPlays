import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Row, Col, Container, Button, Table } from 'react-bootstrap';
import ScrollingWidget from './Widgets/ScrollingWidget';
import firebase from '../firebase/firebase';
import Loader from './Loader';

const Notes = () => {
  // Hooks
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    firebase.database().ref('/notes').once('value')
      .then((snapshot) => {
        setNotes(Object.values(snapshot?.val()) || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('error fetching notes: ', err);
        setIsLoading(false);
      });
  }, []);
  // Handlers

  const renderNotes = () => {
    if (notes.length === 0) return <Row><Col><h4>Nothing here yet...</h4></Col></Row>;
    return notes.map(note => (
      <tr>
        <td>
          <Link className="note-title" to={`/note/${note.id}`}>{note.title}</Link>
        </td>
      </tr>
    ));
  };

  console.log(notes);
  return (
    <Fragment>
      <ScrollingWidget />
      <Container>
        <Row className="mb-3">
          <Col className="d-flex justify-content-between">
            <h1 className="d-inline-block">Notes</h1>
            <div>
              <Button variant="primary" onClick={() => history.push('/notes/new')}>Create</Button>
            </div>
          </Col>
        </Row>
        {isLoading ? (
          <Loader />
        ) : (
          <Table striped bordered hover variant="dark">
            <tbody>
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
  };
};
export default connect(mapStateToProps)(Notes);

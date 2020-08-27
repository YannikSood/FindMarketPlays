import React, { useState, Fragment } from 'react';
import { connect } from "react-redux";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import { useHistory, useParams } from "react-router-dom";
import ScrollingWidget from "../Widgets/ScrollingWidget";
import firebase from "../../firebase/firebase";


const EditNote = ({ currentUser, note }) => {    
    const history = useHistory();
    const [bodyValue, setBodyValue] = useState(note.body);
    const [titleValue, setTitleValue] = useState(note.title);
    const update = {
        title: titleValue,
        body: bodyValue
    }

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
                      onChange={(e) => setTitleValue(e.target.value)}
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
                <Button
                  variant="primary"
                  onClick={() => {
                      firebase.database().ref(`/user-notes/${currentUser.id}/${note.id}`).update(update);
                      history.push("/notes")
                    }}
                >
                  Save
                </Button>
                <Button
                  variant="primary"
                  onClick={() => history.push("/notes")}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Container>
      </Fragment>
    );
};

const mapStateToProps = (state) => {
    const { auth, note } = state;

    return {
        currentUser: auth.currentUser,
        note: note
    };
};

export default connect(mapStateToProps)(EditNote);
import React, { useState, Fragment, useRef, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import { useHistory } from "react-router-dom";
import ScrollingWidget from "../Widgets/ScrollingWidget";
import firebase from "../../firebase/firebase";
import { receiveErrors } from '../../actions/notes';
import validateNote from '../../validations/note';
import NoteErrors from '../Errors/NoteErrors';

const EditNote = ({ currentUser, note }) => {    

    const dispatch = useDispatch();
    const history = useHistory();
    const [bodyValue, setBodyValue] = useState(note.body);
    const [titleValue, setTitleValue] = useState(note.title);
    const [noteErrors, setErrors] = useState({});
    const ref = useRef();

    useEffect(() => {
      if (titleValue === undefined || bodyValue === undefined) {
        history.push("/notes");
      }
    }, [])
    
    const update = {
      title: titleValue,
      body: bodyValue
    }

    
    function handleSubmit() {
      let bodyText = ref.current.getEditor().getText().replace(/\n/ig, '');
      const { errors, isValid } = validateNote(titleValue, bodyText);
      if (!isValid) {
        setErrors(errors);
        dispatch(receiveErrors(errors));
        return;
      } else {
        firebase.database().ref(`/user-notes/${currentUser.id}/${note.id}`).update(update);
        history.push("/notes");
      }

    }

    return (
      <Fragment>
        <ScrollingWidget />
          <Container>
            {NoteErrors(noteErrors)}
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
                  value={bodyValue || ""}
                  onChange={setBodyValue}
                  id="notes-container"
                  placeholder="Compose a note..."
                  ref={ref}
                />
                <Button
                  variant="primary"
                  onClick={() => {handleSubmit()}}
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
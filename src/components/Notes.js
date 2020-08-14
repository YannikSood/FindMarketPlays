
import React, { useState, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import ScrollingWidget from './ScrollingWidget';

const Notes = () => {
  // Hooks
  const [inputValue, setInputValue] = useState('');
  // Handlers

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
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Notes;

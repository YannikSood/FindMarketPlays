
import React, { useState, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import ScrollingWidget from './Widgets/ScrollingWidget';

const Notes = () => {
  // Hooks
  const [inputValue, setInputValue] = useState('');
  // Handlers
  const handleSubmit = () => {
    console.log('Payload for note submission: ', inputValue); // eslint-disable-line
    setInputValue('');
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
    </Fragment>
  );
};

export default Notes;

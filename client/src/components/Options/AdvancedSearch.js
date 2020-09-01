import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import { useHistory } from 'react-router-dom';
import ScrollingWidget from '../Widgets/ScrollingWidget';
import DatePicker from 'react-datepicker';

const AdvancedSearch = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
      <Container>
        <Row>
          <Col>
            <h1>Advanced Search</h1>
            <InputGroup>
              <label>Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
};

export default AdvancedSearch
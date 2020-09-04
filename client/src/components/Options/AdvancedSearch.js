import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import { receiveResults } from '../../actions/advancedSearch';

// import DatePicker from 'react-datepicker';
// import fetch from 'node-fetch';
// import moment from "moment";
// import 'react-datepicker/dist/react-datepicker.css';

const AdvancedSearch = ( {ticker, receiveResults} ) => {
    const [afterDate, setAfterDate] = useState();
    const [beforeDate, setBeforeDate] = useState();

    const search = () => {
      const url = `/betweenSearch/${beforeDate}/${afterDate}/${ticker}`;
      Axios.get(url, {
        headers: {"Content-Type": "application/json"}
      })
      .then(res => receiveResults(res.data.message.option_activity))
    }

    return (
      <Container>
        <Row className="d-flex justify-content-center">
          <Col>
            <InputGroup>
              <Row>
                <Col>
                  <InputGroup.Append>From this date</InputGroup.Append>
                  <Form.Control
                    placeholder="YYYY-MM-DD"
                    onChange={(e) => setBeforeDate(e.target.value)}
                  ></Form.Control>
                </Col>
                <Col>
                  <InputGroup.Append>To this date</InputGroup.Append>
                  <Form.Control
                    placeholder="YYYY-MM-DD"
                    onChange={(e) => setAfterDate(e.target.value)}
                  ></Form.Control>
                </Col>
                <Col>
                  <Row>
                    <Button onClick={() => search()}>Search</Button>
                  </Row>
                </Col>
              </Row>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
};

const MSTP = (state) => ({
  ticker: state.advancedSearch.ticker
})

const MDTP = dispatch => ({
  receiveResults: (results) => dispatch(receiveResults(results))
})

export default connect(MSTP, MDTP)(AdvancedSearch)
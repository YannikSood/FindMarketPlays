import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';
import ScrollingWidget from '../Widgets/ScrollingWidget';
import DatePicker from 'react-datepicker';
import fetch from 'node-fetch';

const AdvancedSearch = ( {ticker} ) => {
    const [afterDate, setAfterDate] = useState(new Date(2020, 7, 5));
    const [beforeDate, setBeforeDate] = useState(new Date(2020, 7, 1));

    const search = () => {
      const url = `/beforeSearch/${beforeDate}/${afterDate}/${ticker}`;
      console.log(url);
        fetch(url, { headers: { Accept: 'application/json' } })
          .then(res => res.json()
            .then((json) => {
              // setOptions(json.message.option_activity || []);
              console.log(json);
            }))
          .catch(err => console.log(err)); // eslint-disable-line
    }

    return (
      <Container>
        <Row>
          <Col>
            {/* <h1>Advanced Search</h1> */}
            <InputGroup>
              <Col className="align=center">
                <Row>
                    <Form.Check name="date" inline label="On" type="radio"/>
                    <Form.Check name="date" inline label="Before" type="radio"/>
                    <Form.Check name="date" inline label="After" type="radio"/>
                    <Form.Check name="date" inline label="Between" type="radio"/>

                </Row>
                <Row>
                  <DatePicker
                    selected={beforeDate}
                    onChange={(date) => setBeforeDate(date)}
                  />
                </Row>
                <Row>
                  <DatePicker
                    selected={afterDate}
                    onChange={(date) => setAfterDate(date)}
                  />
                </Row>
              </Col>          
              <Button onClick={() => search()}>
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
};

const MSTP = (state) => ({
  ticker: state.advancedSearch
})

export default connect(MSTP)(AdvancedSearch)
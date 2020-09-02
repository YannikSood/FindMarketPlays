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
// import fetch from 'node-fetch';
import 'react-datepicker/dist/react-datepicker.css';

const AdvancedSearch = ( {ticker} ) => {
    const [afterDate, setAfterDate] = useState(false);
    const [beforeDate, setBeforeDate] = useState(false);

    const search = () => {
      const url = `/beforeSearch/${beforeDate}/${afterDate}/${ticker}`;
      console.log(beforeDate)
      console.log('--')
      console.log(afterDate)
      // const url = `https://api.benzinga.com/api/v1/signal/option_activity?parameters%5Bdate_from%5D=${beforeDate}&parameters%5Bdate_to%5D=${afterDate}&parameters%5Btickers%5D=${ticker}&token=bd2570cf59734eb9934b3cd886ce958b`
      fetch(url, { headers: { Accept: 'application/json' } })
        // .then(res => console.log(res)
        .then(res => res.json()
        
          .then((json) => {
            console.log(json);
            // setOptions(json.message.option_activity || []);
          }))
        .catch(err => console.log("hey you have an error" + err))
    }

    return (
      <Container>
        <Row className="d-flex justify-content-center">
          <Col >
            {/* <h1>Advanced Search</h1> */}
            <InputGroup>
              <Row >
                <Col>
                  <DatePicker
                    placeholderText="From this date"
                    selected={beforeDate}
                    onChange={(date) => setBeforeDate(date)}
                  />
                </Col>
                <Col>
                  <DatePicker
                    placeholderText="To this date"
                    selected={afterDate}
                    onChange={(date) => setAfterDate(date)}
                  />
                </Col>
                <Col >
                <Row>
                  <Button onClick={() => search()}>
                    Search
                  </Button>

                  
                </Row>
                </Col>
                {/* <Col>
                </Col> */}
              </Row>          
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
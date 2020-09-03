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
import Axios from "axios";
import { receiveResults } from '../../actions/advancedSearch';

// import DatePicker from 'react-datepicker';
// import fetch from 'node-fetch';
// import moment from "moment";
// import 'react-datepicker/dist/react-datepicker.css';

const AdvancedSearch = ( {ticker, receiveResults} ) => {
    const [afterDate, setAfterDate] = useState();
    const [beforeDate, setBeforeDate] = useState();

    const reformatDate = (date, flag) => {
      console.log(date)
      // let newDate = moment(date).format("YYYY-MM-DD");
      
      // if (flag === 'before') {
      //   setBeforeDate(newDate);
      // } else {
      //   setAfterDate(newDate);
      // }
    }
    
    const search = () => {
      const url = `/beforeSearch/${beforeDate}/${afterDate}/${ticker}`;
      // console.log(url)
      // const url = `https://api.benzinga.com/api/v1/signal/option_activity?parameters%5Bdate_from%5D=${beforeDate}&parameters%5Bdate_to%5D=${afterDate}&parameters%5Btickers%5D=${ticker}&token=bd2570cf59734eb9934b3cd886ce958b`
      // fetch(url, { headers: { Accept: 'application/json' } })
      //   // .then(res => console.log(res)
      //   .then(res => res.json()
        
      //     .then((json) => {
      //       console.log(json);
      //       // setOptions(json.message.option_activity || []);
      //     }))
      //   .catch(err => console.log("hey you have an error" + err))
      Axios.get(url, {
        headers: {"Content-Type": "application/json"}
      })
      .then(res => receiveResults(res.data.message.option_activity))
    }

    return (
      <Container>
        <Row className="d-flex justify-content-center">
          <Col>
            {/* <h1>Advanced Search</h1> */}
            <InputGroup>
              <Row>
                <Col>
                  <InputGroup.Append>From this date</InputGroup.Append>
                  <Form.Control
                    placeholder="YYYY-MM-DD"
                    onChange={(e) => setBeforeDate(e.target.value)}
                  ></Form.Control>
                  {/* <DatePicker
                    dateFormat="yyyy-MM-dd"
                    placeholderText="From this date"
                    selected={afterDate}
                    onChange={(date) => reformatDate(date, "after")}
                  /> */}
                </Col>
                <Col>
                  <InputGroup.Append>To this date</InputGroup.Append>
                  <Form.Control
                    placeholder="YYYY-MM-DD"
                    onChange={(e) => setAfterDate(e.target.value)}
                  ></Form.Control>
                  {/* <DatePicker
                    dateFormat="yyyy-MM-dd"
                    placeholderText="To this date"
                    selected={beforeDate}
                    onChange={(date) => reformatDate(date, "before")}
                  /> */}
                </Col>
                <Col>
                  <Row>
                    <Button onClick={() => search()}>Search</Button>
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
  ticker: state.advancedSearch.ticker
})

const MDTP = dispatch => ({
  receiveResults: (results) => dispatch(receiveResults(results))
})

export default connect(MSTP, MDTP)(AdvancedSearch)
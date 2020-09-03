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

    const search = () => {
      const url = `/betweenSearch/${beforeDate}/${afterDate}/${ticker}`;
      Axios.get(url, {
        headers: {"Content-Type": "application/json"}
      })
      .then(res => receiveResults(res.data.message.option_activity))
      // const url = `https://api.benzinga.com/api/v1/signal/option_activity?parameters%5Bdate_from%5D=${beforeDate}&parameters%5Bdate_to%5D=${afterDate}&parameters%5Btickers%5D=${ticker}&token=bd2570cf59734eb9934b3cd886ce958b`
//       console.log(url);
//         fetch(url, { headers: { Accept: 'application/json' } })
//           .then(res => res.json()
//             .then((json) => {
//               // setOptions(json.message.option_activity || []);
//               console.log(json);
//             }))
//           .catch(err => console.log(err)); // eslint-disable-line
// >>>>>>> yannik/v2
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
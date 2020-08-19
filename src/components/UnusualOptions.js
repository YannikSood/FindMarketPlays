import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ScrollingWidget from './Widgets/ScrollingWidget';
import UnusualOptionsFlow from './UnusualOptionFlow';
import { debounce } from '../helpers/SearchHelper';
import * as ROUTES from '../routes/routes';
import { Redirect } from 'react-router-dom';


const UnusualOptions = ({ isAuthed }) => {
  // Hooks
  const [searchedValue, setSearchedValue] = useState('TSLA');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const url = `https://api.benzinga.com/api/v1/signal/option_activity?page=1&parameters%5Btickers%5D=${searchedValue}&token=bd2570cf59734eb9934b3cd886ce958b`;
      fetch(url, { headers: { Accept: 'application/json' } })
        .then(res => res.json()
          .then((json) => {
            setOptions(json.option_activity || []);
          }))
        .catch(err => console.error(err)); // eslint-disable-line
    };
    debounce(fetchData());
  }, [searchedValue]);

  // Handlers
  const handleInputChange = (event) => {
    setSearchedValue(event.target.value.toUpperCase());
  };


  return (
    <Fragment>
      <ScrollingWidget />
      <Container>
        <Row className="widget__wrapper">
          <Col md={7}>
            <Form>
              <h1>Find Unusual Options Trades</h1>
              <h5>ENTER STOCK TICKER</h5>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={searchedValue}
                  onChange={handleInputChange}
                  placeholder="Enter Stock Ticker"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          {searchedValue && options.length > 0 && <UnusualOptionsFlow value={options} />}
        </Row>
      </Container>
      <div>{isAuthed ? <Redirect to={ROUTES.UNUSUAL_OPTIONS} /> : <Redirect to={ROUTES.DASHBOARD} />}</div>
    </Fragment>
  );
};

export default UnusualOptions;

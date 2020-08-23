import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import ScrollingWidget from './Widgets/ScrollingWidget';
import UnusualOptionsFlow from './UnusualOptionFlow';
import { debounce } from '../helpers/SearchHelper';

const UnusualOptions = ({ isAuthed }) => {
  // Hooks
  const [searchedValue, setSearchedValue] = useState('TSLA');
  const [options, setOptions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!isAuthed) history.push('/login');
  }, [isAuthed, history]);

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
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    isAuthed: auth.isAuthed,
  };
};
export default connect(mapStateToProps)(UnusualOptions);

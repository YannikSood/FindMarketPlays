import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';
import ScrollingWidget from '../Widgets/ScrollingWidget';
import UnusualOptionsFlow from './UnusualOptionFlow';
import { debounce } from '../../helpers/SearchHelper';
import SymbolErrors from '../Errors/SymbolErrors';
import AdvancedSearch from './AdvancedSearch';
import { receiveTicker, receiveResults } from '../../actions/advancedSearch';

const UnusualOptions = ({ isAuthed, sendTicker, sendResults, results }) => {
  // Hooks
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [searchedValue, setSearchedValue] = useState('AMZN');
  const [options, setOptions] = useState([]);
  const history = useHistory();

  const displayAdvancedSearch = () => {
    if (advancedSearch) {
      return (
        <Container>
          <Row>
            <Col>
              <AdvancedSearch/>
            </Col>
          </Row>

        </Container>
      );
    }
  }

  const SwitchButtons = () => {
    if (advancedSearch) {
      return (
        <Button variant="secondary" onClick={() => setAdvancedSearch(false)}>
          Close
        </Button>
      )
    } else {
      return (
        <Button onClick={() => setAdvancedSearch(true)}>
          Advanced Search
        </Button>
      )
    }
  }

  const showErr = () => {
    if (!Object.values(options).length) {
      return SymbolErrors()
    }
  }

  // the reason for it not updating again should be here in useEffect
  useEffect(() => {
    // this useEffect sets the advanced search results. tried this to see if it works, but it broke the old useEffect 
    if (results) setOptions(results);
  })

  useEffect(() => {
    // this is the old useEffect
    if (!isAuthed) {
      history.push("/login");
    } else if (results) {
        console.log("printing results: " + results)
        setOptions(results)
    } else {
        const fetchData = () => {
                  const url = `/optionsAPI/${searchedValue}`;
                  fetch(url, { headers: { Accept: 'application/json' } })
                    .then(res => res.json()
                      .then((json) => {
                        setOptions(json.message.option_activity || []);
                      }))
                    .catch(err => console.log(err)); // eslint-disable-line
                };
                debounce(fetchData());
                sendTicker(searchedValue);
                sendResults();
    }
  }, [isAuthed, history, searchedValue]);

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
              <InputGroup>
                <Form.Control
                  type="text"
                  value={searchedValue}
                  onChange={handleInputChange}
                  placeholder="Enter Stock Ticker"
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
                <InputGroup.Append>
                  <SwitchButtons/>
                </InputGroup.Append>
              </InputGroup>
            </Form>
            {showErr()}
            {displayAdvancedSearch()}
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
  const { auth, advancedSearch } = state;

  return {
    isAuthed: auth.isAuthed,
    results: advancedSearch.results
  };
};

const mapDispatchToProps = (dispatch) => ({
  sendTicker: (ticker) => dispatch(receiveTicker(ticker)),
  sendResults: () => dispatch(receiveResults({}))
})
export default connect(mapStateToProps, mapDispatchToProps)(UnusualOptions);

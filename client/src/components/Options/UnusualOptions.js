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

const UnusualOptions = ({ isAuthed }) => {
  // Hooks
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [searchedValue, setSearchedValue] = useState('AMZN');
  const [options, setOptions] = useState([]);
  const history = useHistory();

  const showErr = () => {
    if (!Object.values(options).length) {
      return SymbolErrors()
    }
  }

  useEffect(() => {
    if (!isAuthed) {
      history.push("/login");
    } else {
        const fetchData = () => {
          const url = `/optionsAPI/${searchedValue}`;
          fetch(url, { headers: { Accept: 'application/json' } })
            .then(res => res.json()
              .then((json) => {
                // console.log(json);
                setOptions(json.message.option_activity || []);
              }))
            .catch(err => console.log(err)); // eslint-disable-line
        };
        debounce(fetchData());  
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
                <InputGroup.Append>
                  <Button>
                    Advanced Search
                  </Button>
                </InputGroup.Append>
                <Form.Control
                  type="text"
                  value={searchedValue}
                  onChange={handleInputChange}
                  placeholder="Enter Stock Ticker"
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
              </InputGroup>
            </Form>
            {showErr()}
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

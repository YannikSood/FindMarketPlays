import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import { connect } from "react-redux";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import { useHistory, Link } from 'react-router-dom';
import ScrollingWidget from '../Widgets/ScrollingWidget';
import BasicOptionsFlow from './BasicOptionsFlow';
import { debounce } from '../../helpers/SearchHelper';
import SymbolErrors from '../Errors/SymbolErrors';
import { receiveFromProspect } from '../../actions/fromProspect'

const BasicUnusualOptions = ({ isAuthed, prospectUO, fromProspect, receiveFromProspect }) => {
  // Hooks
  const [searchedValue, setSearchedValue] = useState("AMZN,TSLA");
  const [options, setOptions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(prospectUO).length) {
      setSearchedValue(prospectUO)
      const fetchData = () => {
        const url = `/optionsAPI/${prospectUO}`;
        fetch(url, { headers: { Accept: "application/json" } })
          .then((res) =>
            res.json().then((json) => {
              setOptions(json.message.option_activity || []);
            })
          )
          .catch((err) => console.log(err)); // eslint-disable-line
      };
      fetchData()
    }
  }, []);

  useEffect(() => {
    if (!isAuthed) {
      history.push("/login");
    } else {
      const fetchData = () => {
        const url = `/optionsAPI/${searchedValue}`;
        fetch(url, { headers: { Accept: "application/json" } })
          .then((res) =>
            res.json().then((json) => {
              setOptions(json.message.option_activity || []);
            })
          )
          .catch((err) => console.log(err)); // eslint-disable-line
      };
      debounce(fetchData());
    }
  }, [isAuthed, history, searchedValue]);

  const showErr = () => {
    if (!Object.values(options).length) {
      return SymbolErrors();
    }
  };

  const handleBack = () => {
    history.push('/prospects');
    receiveFromProspect();
  }

  const toProspect = () => {
    if (fromProspect) {
      return (
        <Button className="mb-2" onClick={() => handleBack()}>
          Back
        </Button>
      )
    }
  }

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
              <h1>Unusual Options Search</h1>
              <Row>
                <Col>
                  <h5>ENTER STOCK TICKER(S)</h5>
                </Col>
                <Col className="d-flex justify-content-end">
                  {toProspect()}
                </Col>
              </Row>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={searchedValue}
                  onChange={handleInputChange}
                  placeholder="AMZN,TSLA"
                  onKeyPress={(e) => {
                    e.key === "Enter" && e.preventDefault();
                  }}
                />
              </InputGroup>
            </Form>
            {showErr()}
          </Col>
        </Row>
        <Row>
          {searchedValue && options.length > 0 && (
            <BasicOptionsFlow value={options} />
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

const MSTP = (state) => ({
  isAuthed: state.auth.isAuthed,
  prospectUO: state.prospectUO,
  fromProspect: state.fromProspect
});

const MDTP = dispatch => ({
  receiveFromProspect: () => dispatch(receiveFromProspect(false))
})

export default connect(MSTP, MDTP)(BasicUnusualOptions);
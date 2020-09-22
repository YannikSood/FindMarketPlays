import React, { useState, Fragment, useEffect } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Button from "react-bootstrap/Button";
import ScrollingWidget from '../Widgets/ScrollingWidget';
import TAWidget from '../Widgets/TAWidget';
import SSIWidget from '../Widgets/SingleStockInfo';
import SSFWidget from '../Widgets/SSFinancials';
import StockProfile from '../Widgets/StockProfile';
import { debounce } from '../../helpers/SearchHelper';
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { receiveFromProspect } from '../../actions/fromProspect';
import { clearProspectUO } from '../../actions/prospectUO';
// import { clearGuestStock } from '../../actions/guestStock';
import { receiveFromSDScreen } from '../../actions/fromSDScreen';

const OneStock = ({guestStock, prospectUO, fromProspect, receiveFromSDScreen , receiveFromProspect, fromSDScreen}) => {
  // Hooks

  // clear prospectUO on back

  const [searchedValue, setSearchedValue] = useState(
    Object.keys(guestStock).length
      ? guestStock.symbol
      : Object.keys(prospectUO).length
      ? prospectUO
      : "TSLA"
  );
  const history = useHistory();

  // Handlers
  const handleInputChange = (event) => {
    debounce(setSearchedValue(event.target.value.toUpperCase()), 300);
  };

  const handleBackSD = () => {
    history.push('/sdScreen');
    receiveFromSDScreen();
  }

  const handleBackProspect = () => {
    history.push('/prospects');
    // clearProspectUO();
    receiveFromProspect();
  }

  const toProspect = () => {
    if (fromProspect) {
      return (
        <Button className="mb-2" onClick={() => handleBackProspect()} >
          Back
        </Button>
      );
    }
  };

  const toSDScreen = () => {
    if (fromSDScreen) {
      return (
        <Button
          className="mb-2"
          onClick={() => handleBackSD()}
        >
          Back
        </Button>
      );
    }
  };

  return (
    <Fragment>
      <ScrollingWidget />
      <Container>
        <Row className="widget__wrapper">
          <Col md={7}>
            <Form>
              <h1>Research A Single Stock</h1>
              <Row>
                <Col>
                  <h5>ENTER STOCK TICKER</h5>
                </Col>
                <Col className="d-flex justify-content-end">
                  {toProspect()}
                  {toSDScreen()}
                </Col>
              </Row>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={searchedValue}
                  onChange={handleInputChange}
                  placeholder="Enter Stock Ticker"
                  onKeyPress={(e) => {
                    e.key === "Enter" && e.preventDefault();
                  }}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            <SSIWidget value={searchedValue} />
          </Col>
          <Col md={12} lg={6}>
            <StockProfile value={searchedValue} />
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            <TAWidget value={searchedValue} />
          </Col>
          <Col md={12} lg={6}>
            <SSFWidget value={searchedValue} />
          </Col>
        </Row>
        <Row>
          <Col className="widget__col">
            <TradingViewWidget
              symbol={searchedValue}
              theme={Themes.DARK}
              locale="en"
              autosize
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

const MSTP = (state) => ({
  isAuthed: state.auth.isAuthed,
  prospectUO: state.prospectUO,
  fromProspect: state.fromProspect,
  guestStock: state.guestStock,
  fromSDScreen: state.fromSDScreen
});

const MDTP = dispatch => ({
  receiveFromProspect: () => dispatch(receiveFromProspect(false)),
  clearProspectUO: () => dispatch(clearProspectUO()),
  // clearGuestStock: () => dispatch(clearGuestStock()),
  receiveFromSDScreen: () => dispatch(receiveFromSDScreen(false))
})

export default connect(MSTP, MDTP)(OneStock);

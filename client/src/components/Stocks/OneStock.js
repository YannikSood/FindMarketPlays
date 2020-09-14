import React, { useState, Fragment, useEffect } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import ScrollingWidget from '../Widgets/ScrollingWidget';
import TAWidget from '../Widgets/TAWidget';
import SSIWidget from '../Widgets/SingleStockInfo';
import SSFWidget from '../Widgets/SSFinancials';
import StockProfile from '../Widgets/StockProfile';
import { debounce } from '../../helpers/SearchHelper';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const OneStock = ({isAuthed}) => {
  // Hooks
  const [searchedValue, setSearchedValue] = useState('TSLA');
  const history = useHistory();

  // Handlers
  const handleInputChange = (event) => {
    debounce(setSearchedValue(event.target.value.toUpperCase()), 300);
  };

  useEffect(() => {
    if (!isAuthed) {
       history.push("/login")
    }
  }, [])

  return (
    <Fragment>
      <ScrollingWidget />
      <Container>
        <Row className="widget__wrapper">
          <Col md={7}>
            <Form>
              <h1>Research A Single Stock</h1>
              <h5>ENTER STOCK TICKER</h5>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={searchedValue}
                  onChange={handleInputChange}
                  placeholder="Enter Stock Ticker"
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
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
};

const MSTP = (state) => ({
  isAuthed: state.auth.isAuthed,
  prospectUO: state.prospectUO
});

export default connect(MSTP)(OneStock);

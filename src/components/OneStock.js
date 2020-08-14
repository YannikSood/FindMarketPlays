import React, { useState, Fragment } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import ScrollingWidget from './ScrollingWidget';
import TAWidget from './TAWidget';
import SSIWidget from './SingleStockInfo';
import SSFWidget from './SSFinancials';
import StockProfile from './StockProfile';
import { debounce } from '../helpers/SearchHelper';

const OneStock = () => {
  // Hooks
  const [searchedValue, setSearchedValue] = useState('TSLA');

  // Handlers
  const handleInputChange = (event) => {
    debounce(setSearchedValue(event.target.value.toUpperCase()), 300);
  };

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

export default OneStock;

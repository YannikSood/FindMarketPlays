import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, DropdownButton, Dropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Axios from "axios";

const LongCall = () => {
    const [symbol, setSymbol] = useState({ ticker: "", price: "" });
    const [price, setPrice] = useState();
    const [optionPrice, setOptionPrice] = useState(0);
    const [contracts, setContracts] = useState(1);
    const [cost, setCost] = useState(0);
    const [expiry, setExpiry] = useState();
    const [strikePrice, setStrikePrice] = useState();
    const [breakEven, setBreakEven] = useState();

    const handleStrikePrice = (e) => {
        setStrikePrice(e.target.value);
    }

    const handleExpiry = (e) => {
        setExpiry(e.target.value);
    }

    const calculateCost = () => {
        setCost(contracts * optionPrice * 100);
        setBreakEven(Number(strikePrice) + Number(optionPrice));

    }

    const handleSymbol = (e) => {
        setSymbol({ ...symbol, [e.target.name]: e.target.value })
    }

    const handleOptionPrice = (e) => {
        setOptionPrice(e.target.value);
    }

    const getPrice = () => {
        let url = `/getTicker/${symbol.ticker}`;

        Axios.get(url)
            .then(res => {
                // setSymbol({ ...symbol, [symbol.price]: res.data.message.latestPrice });
                // console.log(res.data.message.latestPrice)
                setPrice(res.data.message.latestPrice)
                console.log(contracts)
                console.log(optionPrice)
            })
            .catch(err => console.log(err))
            
    }

    const handleContracts = (e) => {
        setContracts(e.target.value);
    }

    return (
      <Container>
        <Row>
          <Col>
            <Row>Long Call Calculator</Row>
            <Row>
              <Col>
                <Row>Underlying stock symbol</Row>
                <Row>
                  <Form.Group>
                    <Form.Label>Symbol</Form.Label>
                    <Form.Control
                      name="ticker"
                      onChange={handleSymbol}
                      value={symbol.ticker}
                    />
                  </Form.Group>
                  <Button onClick={() => getPrice()}>Get Price</Button>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>Current Price</Form.Label>
                    <Form.Control
                      name="price"
                      onChange={handleSymbol}
                      value={price}
                    />
                  </Form.Group>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>Option</Row>

            <DropdownButton title="Buy or Write">
              <Dropdown.Item>Buy</Dropdown.Item>
              <Dropdown.Item>Write</Dropdown.Item>
            </DropdownButton>
            <Form.Group>
              <Form.Label>Price per option</Form.Label>
              <Form.Control
                name="optionPrice"
                onChange={handleOptionPrice}
                value={optionPrice}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contracts</Form.Label>
              <Form.Control
                name="contracts"
                onChange={handleContracts}
                value={contracts}
              />
              <Form.Text className="text-muted">
                One contract = 100 shares
              </Form.Text>
            </Form.Group>
            <Row>Total Cost: ${cost}</Row>
            <Form.Group>
              <Form.Label>Expiry</Form.Label>
              <Form.Control
                placeholder="YYYY-MM-DD"
                // name="price"
                onChange={handleExpiry}
                value={expiry}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Strike Price</Form.Label>
              <Form.Control
              // name="price"
              onChange={handleStrikePrice}
              value={strikePrice}
              />
            </Form.Group>
            {/* <Form.Group>
              <Form.Label>Implied Volatility</Form.Label>
              <Form.Control

              />
            </Form.Group> */}
            <Button onClick={() => calculateCost()}
            >Calculate</Button>
          </Col>
        </Row>
        <Row>
          <Col>
        <Row>Estimated Returns: {symbol.ticker} at {price}</Row>
            <Row>Entry Cost: {cost}</Row>
            <Row>Maximum Risk: {cost} at a price of {strikePrice} at expiry</Row>
            <Row>Maximum Return</Row>
            <Row>Breakevens at Expiry: {breakEven}</Row>
          </Col>
        </Row>
      </Container>
    );
}

export default LongCall;
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import React from 'react';
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge";
import {CardTitle } from 'reactstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ScrollingWidget from './ScrollingWidget';
import TAWidget from './TAWidget';
import SSIWidget from './SingleStockInfo';
import SSFWidget from './SSFinancials';
import Footer from './Footer';
import StockProfile from './StockProfile';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css"

class OneStock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "TSLA",
        searchedValue: "TSLA", //<------- here
        clicked: false,
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    toggleBtnHandler = () => {
      return this.setState({
        clicked: !this.state.clicked,
        searchedValue: this.state.value === "" ? "TSLA" : this.state.value,  //<------- here
      });
    };
  
    handleChange(event) {
      this.setState({ value: event.target.value });
    }
  
    render() {
      return (
        <div className = "OneStock">
          <Container fluid>

            <Row>
                <Col><ScrollingWidget></ScrollingWidget></Col>  
                
            </Row>
            <br></br>
            <Row>
              <Col>
              <h1><Badge variant="light">Research A Single Stock</Badge></h1>
              </Col>
            </Row>

            

            <Row>
              <Col xs={12} md={4}>
                {/* <Card> */}
                  <CardTitle className="text-uppercase text h6 mb-0">
                    Enter Stock Ticker [CAPITALIZED]:{" "}
                  </CardTitle>
                  <Form.Group>
                   <Form.Control type="text" value={this.state.value}
                    onChange={this.handleChange} placeholder="Enter Stock Ticker" />
                    <br></br>
                     <Button variant="success" onClick={this.toggleBtnHandler}>SEARCH </Button>{' '}
                  </Form.Group>
                  {/* <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  /> */}
                  {/* <div>
                    <button className="button" onClick={this.toggleBtnHandler}>
                      SEARCH
                    </button>
                  </div> */}
                {/* </Card> */}
              </Col >
              <Col xs={12} md={4}>
                <SSIWidget value={this.state.searchedValue} /> 
                <br></br>
              </Col>
              <Col xs={12} md={4}>
               <StockProfile value={this.state.searchedValue} /> 
               <br></br>
              </Col>
                    
            </Row>
            <Row>
                  <Col xs={12} md={4}>
                  <TradingViewWidget
                    symbol= {this.state.searchedValue}
                    theme={Themes.DARK}
                    locale="en"
                    autosize
                  />
                  </Col>

                  <Col xs={12} md={4}>
                    <TAWidget value = {this.state.searchedValue}/>
                  </Col>

                  <Col xs={12} md={4}>
                    <SSFWidget value = {this.state.searchedValue}/>
                  </Col>
              </Row>
            <Row>
              

              <Col>
                    <SSFWidget value = {this.state.searchedValue}/>
              </Col>
                

                
              </Row> 
             
                   
              <Row>
                  <Footer></Footer>
              </Row>
          
          </Container>
      </div>

    )
    }
}


export default OneStock;

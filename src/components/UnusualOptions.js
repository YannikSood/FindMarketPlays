// TODO: This needs a full refactor
import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { CardTitle } from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ScrollingWidget from './ScrollingWidget';
import UnusualOptionsFlow from './UnusualOptionFlow';

class UnusualOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'TSLA',
      searchedValue: 'TSLA', //<------- here
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

    toggleBtnHandler = () => this.setState(
      {
        searchedValue: this.state.value === '' ? 'TSLA' : this.state.value,
        clicked: true, //<------- here
      },
      this.fetchData,
    )

    // clicked = () => {
    //     this.toggleBtnHandler();
    //     if (this.state.clicked == false) {

    //     }
    //     return this.setState({
    //         clicked: false //<------- here
    //     });
    // }

    handleChange(event) {
      this.setState({ value: event.target.value });
    }

    fetchData() {
      const val = this.state.searchedValue;
      const url = `https://api.benzinga.com/api/v1/signal/option_activity?page=1&parameters%5Btickers%5D=${val}&token=bd2570cf59734eb9934b3cd886ce958b`;
      fetch(url, { headers: { Accept: 'application/json' } })
        .then(res => res.json())
        .then((res) => {
          const itemsList = res.option_activity;

          this.setState({
            items: itemsList,
          },
          function() {
            console.log(this.state.items);
          });
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        },
          // console.log(this.state.items)
        );
    }

    render() {
      return (
        <div className="OneStock">
          <Container fluid>
            <Row>
              <Col><ScrollingWidget /></Col>
            </Row>

            <Row>
              <Col>
                <h1><Badge variant="light">Find Unusual Options Trades</Badge></h1>
              </Col>
            </Row>


            <Row>
              <Col xs={12} md={4}>
                {/* <Card> */}
                <CardTitle className="text-uppercase text h6 mb-0">
                  Enter Stock Ticker [CAPITALIZED]:
                  {' '}
                </CardTitle>
                <Form.Group>
                  <Form.Control
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Enter Stock Ticker"
                  />
                  <br />
                  <Button variant="success" onClick={this.toggleBtnHandler}>SEARCH </Button>
                  {' '}
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
              </Col>

            </Row>

            <Row>
              <UnusualOptionsFlow value={this.state.items} />
            </Row>
          </Container>
        </div>

      );
    }
}


export default UnusualOptions;

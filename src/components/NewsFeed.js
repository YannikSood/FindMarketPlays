import React, { useState, useEffect, Fragment } from 'react';
import Badge from 'react-bootstrap/Badge';
import { CardTitle } from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ScrollingWidget from './Widgets/ScrollingWidget';
import Button from 'react-bootstrap/Button';
import ScrollingWidget from './ScrollingWidget';
import NewsFlow from './NewsFlow';

import { debounce } from '../helpers/SearchHelper';


const NewsFeed = () => {
  // Hooks
  const [searchedValue, setSearchedValue] = useState('TSLA');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const url = `https://api.benzinga.com/api/v2/news?pageSize=50&page=0&displayOutput=headline&sort=created%3Adesc&tickers=${searchedValue}&token=bd2570cf59734eb9934b3cd886ce958b`;
      fetch(url, { headers: { Accept: 'application/json' } })
        .then(res => res.json()
          .then((json) => {
            setOptions(json || []);
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
              <h1>Find News Articles</h1>
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
          {searchedValue && options.length > 0 && <NewsFlow value={options} />}
        </Row>
      </Container>
    </Fragment>
  );
};

export default NewsFeed;
// class NewsFeed extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           value: 'TSLA',
//           searchedValue: 'TSLA', //<------- here
//           items: [],
//         };
    
//         this.handleChange = this.handleChange.bind(this);
//       }
    
//         toggleBtnHandler = () => this.setState(
//           {
//             searchedValue: this.state.value === '' ? 'TSLA' : this.state.value,
//             clicked: true, //<------- here
//           },
//           this.fetchData,
//         )
        
//         handleChange(event) {
//             this.setState({ value: event.target.value });
//           }
      
//           fetchData() {
//             const val = this.state.searchedValue;
//             const url = `https://api.benzinga.com/api/v2/news?pageSize=50&page=0&displayOutput=headline&sort=created%3Adesc&tickers=${val}&token=bd2570cf59734eb9934b3cd886ce958b`;
//             fetch(url, { headers: { Accept: 'application/json' } })
//               .then(res => res.json())
//               .then((res) => {
//                 this.setState({
//                   items: res,
//                 },
//                 function() {
//                   console.log(this.state.items);
//                 });
//               },
      
//               // Note: it's important to handle errors here
//               // instead of a catch() block so that we don't swallow
//               // exceptions from actual bugs in components.
//               (error) => {
//                 console.log(error);
//               },
//                 // console.log(this.state.items)
//               );
//           }
      
//           render() {
//             return (
//               <div className="OneStock">
//                 <Container fluid>
//                   <Row>
//                     <Col><ScrollingWidget /></Col>
//                   </Row>
      
//                   <Row>
//                     <Col>
//                       <h1><Badge variant="light">Search News Articles</Badge></h1>
//                     </Col>
//                   </Row>
      
      
//                   <Row>
//                     <Col xs={12} md={4}>
//                       {/* <Card> */}
//                       <CardTitle className="text-uppercase text h6 mb-0">
//                         Enter Stock Ticker [CAPITALIZED]:
//                         {' '}
//                       </CardTitle>
//                       <Form.Group>
//                         <Form.Control
//                           type="text"
//                           value={this.state.value}
//                           onChange={this.handleChange}
//                           placeholder="Enter Stock Ticker"
//                         />
//                         <br />
//                         <Button variant="success" onClick={this.toggleBtnHandler}>SEARCH </Button>
//                         {' '}
//                       </Form.Group>
//                       {/* <input
//                           type="text"
//                           value={this.state.value}
//                           onChange={this.handleChange}
//                         /> */}
//                       {/* <div>
//                           <button className="button" onClick={this.toggleBtnHandler}>
//                             SEARCH
//                           </button>
//                         </div> */}
//                       {/* </Card> */}
//                     </Col>
      
//                   </Row>
      
//                   <Row>
//                     <NewsFlow value={this.state.items} />
//                   </Row>
//                 </Container>
//               </div>
      
//             );
//           }
//       }
    
//     export default NewsFeed;
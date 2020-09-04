import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import ScrollingWidget from '../Widgets/ScrollingWidget';
import { debounce } from '../../helpers/SearchHelper';
import Axios from "axios";
import BasicUOFeedFlow from './BasicUOFeedFlow';

const BasicUnusualOptionsFeed = () => {
  // Hooks

  const [options, setOptions] = useState([]);
  const[loader, setLoader] = useState(true);
  
  
  useEffect(() => {
      const fetchData = () => {
        const url = `/optionsAPI`;
        console.log(url);
        fetch(url, { headers: { Accept: 'application/json' } })
          .then(res => res.json()
            .then((json) => {
              setOptions(json.message.option_activity || []);
              setLoader(false);
            }))
          .catch(err => console.log(err));
      };
      debounce(fetchData());
  }, []);

  const loading = () => {
    if (loader) {
      return (
        <Container>
          <Row>
            <Col>
              <h1>
                Loading data. . . 
              </h1>
            </Col>
          </Row>
        </Container>
      )
    }
  }

  const refresh = () => {
    const url = `/optionsAPI`;
    console.log(url);
    Axios.get(url, {
        headers: { "Content-Type": "application/json" }
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }   


  return (
    <Fragment>
      <ScrollingWidget />
      <Container>
        <Row className="widget__wrapper">
          <Col align="center" md={4}>
            <h1>Unusual Options Feed</h1>
            <Button onClick={() => refresh()}>Refresh</Button>
            
          </Col>
        </Row>
        <Row>
          {<BasicUOFeedFlow value={options} />}
          {loading()}
        </Row>
      </Container>
    </Fragment>
  );
};

export default (BasicUnusualOptionsFeed);
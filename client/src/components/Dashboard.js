import React, { Fragment, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ScrollingWidget from './Widgets/ScrollingWidget';
import MarketDataWidget from './Widgets/MarketDataWidget';
import EconDataWidget from './Widgets/EconDataWidget';
import MarketOverviewWidget from './Widgets/MarketOverviewWidget';
// import ReactGa from 'react-ga';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import '../css/Dashboard.css';


const Dashboard = ({isAuthed}) => {
  
  const history = useHistory();
  
  // useEffect(() => {
  //   if (!isAuthed) {
  //     history.push("/login");
  //   }
  // }, []);
  
  return (
    <Fragment>
      <ScrollingWidget />
      <Container>
        <br />
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <h1>Market Overview</h1>
          </Col>
        </Row>
        <Row className="d-flex align-content-center">
          <Col className="widget-containers" md={12} lg={4}>
            <h3>
              <Badge className="widget-headers" variant="light">
                Biggest Movers Today
              </Badge>
            </h3>
            <MarketDataWidget />
          </Col>

          <Col className="widget-containers" md={12} lg={4}>
            <h3>
              <Badge className="widget-headers" variant="light">
                Market Overview
              </Badge>
            </h3>
            <MarketOverviewWidget />
          </Col>

          <Col className="widget-containers" md={12} lg={4}>
            <h3>
              <Badge className="widget-headers" variant="light">
                Upcoming Economic Events
              </Badge>
            </h3>
            <EconDataWidget />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );

 }

const MSTP = (state) => ({
  isAuthed: state.auth.isAuthed,
});

export default connect(MSTP)(Dashboard);

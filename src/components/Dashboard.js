import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ScrollingWidget from './Widgets/ScrollingWidget';
import MarketDataWidget from './Widgets/MarketDataWidget';
import EconDataWidget from './Widgets/EconDataWidget';
import MarketOverviewWidget from './Widgets/MarketOverviewWidget';

const Dashboard = () => (
  <div className="Dashboard">
    <Container fluid>
      <Row>
        <Col><ScrollingWidget /></Col>
      </Row>
      <br />
      <Row>
       <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <h3><Badge variant="light">Biggest Movers Today</Badge></h3>
          <MarketDataWidget />
        </Col>
        <Col xs={12} md={4}>
          <h3><Badge variant="light">Upcoming Economic Events</Badge></h3>
          <EconDataWidget />
        </Col>
        <Col xs={12} md={4}>
          <h3><Badge variant="light">Market Overview</Badge></h3>
          <MarketOverviewWidget />
        </Col>
      </Row>
    </Container>
  </div>

);

export default Dashboard;

import React, { Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ScrollingWidget from './Widgets/ScrollingWidget';
import MarketDataWidget from './Widgets/MarketDataWidget';
import EconDataWidget from './Widgets/EconDataWidget';
import MarketOverviewWidget from './Widgets/MarketOverviewWidget';
// import ReactGa from 'react-ga';


const Dashboard = () => {
  
  return (
     <Fragment>
      <ScrollingWidget />
      <Container >
      <br />
      <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <h1>Market Overview</h1>
        </Col>
      </Row>
      <Row>
        <Col  md={12} lg={4}>
          <h3><Badge variant="light">Biggest Movers Today</Badge></h3>
          <MarketDataWidget />
        </Col>
       
        <Col  md={12} lg={4}>
          <h3><Badge variant="light">Market Overview</Badge></h3>
          <MarketOverviewWidget />
        </Col>

        <Col  md={12} lg={4}>
          <h3><Badge variant="light">Upcoming Economic Events</Badge></h3>
          <EconDataWidget />
        </Col>

      </Row>
    </Container>
    </Fragment>
  )

 }

export default Dashboard;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Welcome from './Welcome';
import ScrollingWidget from './ScrollingWidget';
import MarketDataWidget from './MarketDataWidget';
import EconDataWidget from './EconDataWidget';
import MarketOverviewWidget from './MarketOverviewWidget';
import Footer from './Footer';

// import { makeStyles } from './node_modules/@material-ui/core/styles';
// import Paper from './node_modules/@material-ui/core/Paper';
// import Grid from './node_modules/@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));

const Dashboard = () => (
  <div className="Dashboard">
    <Container fluid>
      <Row>
        <Col><ScrollingWidget /></Col>
      </Row>
      <br />
      <Row>
        <Welcome />
      </Row>
      {/* <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                <h3><Badge variant="light">Biggest Movers Today</Badge></h3>
                <MarketDataWidget></MarketDataWidget>
            </Grid>
        </Grid>

        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                <h3><Badge variant="light">Upcoming Economic Events</Badge></h3>
                <EconDataWidget></EconDataWidget>
            </Grid>
        </Grid>

        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                <h3><Badge variant="light">Market Overview</Badge></h3>
                <MarketOverviewWidget></MarketOverviewWidget>
            </Grid>
        </Grid> */}
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

      <Row>
        <Footer />
      </Row>
    </Container>
  </div>

);

export default Dashboard;

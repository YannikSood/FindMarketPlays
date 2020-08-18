import React from 'react';

//Local Imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import * as ROUTES from '../routes/routes';

// Consider highlighting the active nav link here based on the route param
//Add authenticated/non authenticated versions, add routing
const Navigation = () => (
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand>Platform</Navbar.Brand>
    <Nav>
      <Nav.Link href={ROUTES.DASHBOARD}>Dashboard</Nav.Link>
      <Nav.Link href={ROUTES.SINGLE_STOCK_RESEARCH}>Stock Research</Nav.Link>
      <Nav.Link href={ROUTES.DD}>DD </Nav.Link>
      <Nav.Link href={ROUTES.UNUSUAL_OPTIONS}>Options Feed</Nav.Link>
      <Nav.Link href={ROUTES.NEWS_FEED}>News Feed</Nav.Link>
      <Nav.Link href={ROUTES.NOTES}>Notes </Nav.Link>
      <Nav.Link href={ROUTES.ABOUT}>About </Nav.Link>
      <Button href={ROUTES.LOGIN}>Login/Signup</Button>
    </Nav>
  </Navbar>
);

export default Navigation;

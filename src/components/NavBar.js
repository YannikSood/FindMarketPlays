import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <NavLink className="nav-link" to={ROUTES.DASHBOARD}>Dashboard</NavLink>
      <NavLink className="nav-link" to={ROUTES.SINGLE_STOCK_RESEARCH}>Stock Research</NavLink>
      <NavLink className="nav-link" to={ROUTES.DD}>DD </NavLink>
      <NavLink className="nav-link" to={ROUTES.UNUSUAL_OPTIONS}>Options Feed</NavLink>
      <NavLink className="nav-link" to={ROUTES.NEWS_FEED}>News Feed</NavLink>
      <NavLink className="nav-link" to={ROUTES.NOTES}>Notes </NavLink>
      <NavLink className="nav-link" to={ROUTES.ABOUT}>About </NavLink>
      <NavLink to={ROUTES.LOGIN}><Button variant="primary">Login/Signup</Button></NavLink>
    </Nav>
  </Navbar>
);

export default Navigation;

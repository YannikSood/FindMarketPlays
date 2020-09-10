import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../routes/routes';
import '../css/Footer.css';

const Footer = () => (
  <Navbar className="pt-3" fixed="bottom">
  {/* <Navbar bg="dark" variant="dark" fixed="bottom"> */}
    <Nav>
      <NavLink className="link" to={ROUTES.DASHBOARD}>Copyright 2020 | FindMarketPlays LLC</NavLink>
    </Nav>
  </Navbar>
);

export default Footer;

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../routes/routes';

const Footer = () => (
  <Navbar bg="dark" variant="dark" fixed="bottom">
    <Nav>
      <NavLink className="nav-link" to={ROUTES.DASHBOARD}>Copyright 2020 | FindMarketPlays LLC</NavLink>
    </Nav>
  </Navbar>
);

export default Footer;

import React from 'react';

//Local Imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Consider highlighting the active nav link here based on the route param

const Navigation = () => (
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand>Platform</Navbar.Brand>
    <Nav>
      <Nav.Link href="/">Dashboard</Nav.Link>
      <Nav.Link href="/stock">Stock Research</Nav.Link>
      <Nav.Link href="/DD">DD </Nav.Link>
      <Nav.Link href="/optionFeed">Options Feed</Nav.Link>
      <Nav.Link href="/about">About </Nav.Link>
    </Nav>
  </Navbar>
);

export default Navigation;

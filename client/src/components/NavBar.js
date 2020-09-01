import React from 'react';
// import { NavLink } from 'react-router-dom';
//Local Imports
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as ROUTES from '../routes/routes';
import firebase from '../firebase/firebase';
// import { $ } from 'jquery';

// Consider highlighting the active nav link here based on the route param

const Navigation = ({ isAuthed }) => (
  <div>{isAuthed ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
const NavigationAuth = () => (
  <Navbar
    collapseOnSelect
    expand="sm"
    className="justify-content-center"
    bg="dark"
    variant="dark"
    fixed="top"
  >
    <Navbar.Brand href={"/"}>FMP</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Nav.Link href={`${ROUTES.DASHBOARD}`}>Market Overview</Nav.Link>
        <Nav.Link href={`${ROUTES.SINGLE_STOCK_RESEARCH}`}>
          Stock Lookup
        </Nav.Link>
        <Nav.Link href={`${ROUTES.DD}`}>Research </Nav.Link>
        <Nav.Link href={`${ROUTES.NOTES}`}>Notes </Nav.Link>
        <Nav.Link href={`${ROUTES.UNUSUAL_OPTIONS}`}>Options Feed</Nav.Link>
        <Nav.Link href={`${ROUTES.NEWS_FEED}`}>News Feed</Nav.Link>
        <Nav.Link href={`${ROUTES.PROFILE}`}>Account</Nav.Link>
        {/* <Nav.Link className="nav-link" to={ROUTES.ABOUT}>About </Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
    <Button
      className="ml-2"
      variant="primary"
      onClick={() => {
        firebase.auth().signOut();
      }}
    >
      Sign Out
    </Button>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar
    collapseOnSelect
    expand="sm"
    className="justify-content-center"
    bg="dark"
    variant="dark"
    fixed="top"
  >
    <Navbar.Brand href={"/"}>FMP</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Nav.Link href={`${ROUTES.DASHBOARD}`}>Market Overview</Nav.Link>
        <Nav.Link href={`${ROUTES.SINGLE_STOCK_RESEARCH}`}>
          Stock Lookup
        </Nav.Link>
        <Nav.Link href={`${ROUTES.DD}`}>Research </Nav.Link>
        <Nav.Link href={`${ROUTES.NOTES}`}>Notes </Nav.Link>
        <Nav.Link href={`${ROUTES.UNUSUAL_OPTIONS}`}>Options Feed</Nav.Link>
        <Nav.Link href={`${ROUTES.NEWS_FEED}`}>News Feed</Nav.Link>
        {/* <Nav.Link className="nav-link" to={ROUTES.ABOUT}>About </Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
    <Nav.Link to={ROUTES.LOGIN}>
      <Button className="ml-2" variant="primary">
        Log In/Sign Up
      </Button>
    </Nav.Link>
  </Navbar>
);
const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    isAuthed: auth.isAuthed,
  };
};

export default connect(mapStateToProps)(Navigation);

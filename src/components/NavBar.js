import React from 'react';
import { NavLink } from 'react-router-dom';
//Local Imports
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as ROUTES from '../routes/routes';
import firebase from '../firebase/firebase';

// Consider highlighting the active nav link here based on the route param

const Navigation = ({ isAuthed }) => (
  <div>{isAuthed ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
const NavigationAuth = () => (
  <Navbar collapseOnSelect expand="sm" className="justify-content-center" bg="dark" variant="dark" fixed="top">
    <Navbar.Brand>Platform</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <NavLink className="nav-link" to={ROUTES.DASHBOARD}>Market Overview</NavLink>
        <NavLink className="nav-link" to={ROUTES.SINGLE_STOCK_RESEARCH}>Stock Lookup</NavLink>
        <NavLink className="nav-link" to={ROUTES.DD}>Research </NavLink>
        <NavLink className="nav-link" to={ROUTES.NOTES}>Notes </NavLink>
        <NavLink className="nav-link" to={ROUTES.UNUSUAL_OPTIONS}>Options Feed</NavLink>
        <NavLink className="nav-link" to={ROUTES.NEWS_FEED}>News Feed</NavLink>
        <NavLink className="nav-link" to={ROUTES.PROFILE}>Profile</NavLink>
        {/* <NavLink className="nav-link" to={ROUTES.ABOUT}>About </NavLink> */}
      </Nav>
    </Navbar.Collapse>
    <Button className="ml-2" variant="primary" onClick={() => { firebase.auth().signOut(); }}>Sign Out</Button>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar collapseOnSelect expand="sm" className="justify-content-center" bg="dark" variant="dark" fixed="top">
    <Navbar.Brand>Platform</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <NavLink className="nav-link" to={ROUTES.DASHBOARD}>Market Overview</NavLink>
        <NavLink className="nav-link" to={ROUTES.SINGLE_STOCK_RESEARCH}>Stock Lookup</NavLink>
        <NavLink className="nav-link" to={ROUTES.DD}>Research </NavLink>
        <NavLink className="nav-link" to={ROUTES.NOTES}>Notes </NavLink>
        <NavLink className="nav-link" to={ROUTES.UNUSUAL_OPTIONS}>Options Feed</NavLink>
        <NavLink className="nav-link" to={ROUTES.NEWS_FEED}>News Feed</NavLink>
        {/* <NavLink className="nav-link" to={ROUTES.ABOUT}>About </NavLink> */}
        <NavLink to={ROUTES.LOGIN}><Button className="ml-2" variant="primary">Log In/Sign Up</Button></NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    isAuthed: auth.isAuthed,
  };
};

export default connect(mapStateToProps)(Navigation);

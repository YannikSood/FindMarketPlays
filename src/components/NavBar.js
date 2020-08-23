import React from 'react';
import { NavLink } from 'react-router-dom';
//Local Imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import * as ROUTES from '../routes/routes';
import firebase from '../firebase/firebase';

// Consider highlighting the active nav link here based on the route param

const Navigation = ({ isAuthed }) => (
  <div>{isAuthed ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
const NavigationAuth = () => (
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand>Platform</Navbar.Brand>
    <Nav>
      <NavLink className="nav-link" to={ROUTES.DASHBOARD}>Market Overview</NavLink>
      <NavLink className="nav-link" to={ROUTES.SINGLE_STOCK_RESEARCH}>Stock Lookup</NavLink>
      <NavLink className="nav-link" to={ROUTES.DD}>Research </NavLink>
      <NavLink className="nav-link" to={ROUTES.NOTES}>Notes </NavLink>
      <NavLink className="nav-link" to={ROUTES.UNUSUAL_OPTIONS}>Options Feed</NavLink>
      <NavLink className="nav-link" to={ROUTES.NEWS_FEED}>News Feed</NavLink>
      <NavLink className="nav-link" to={ROUTES.ABOUT}>About </NavLink>
      <Button variant="primary" onClick={() => { firebase.auth().signOut(); }}>Sign Out</Button>
    </Nav>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand>Platform</Navbar.Brand>
    <Nav>
      <NavLink className="nav-link" to={ROUTES.DASHBOARD}>Market Overview</NavLink>
      <NavLink className="nav-link" to={ROUTES.SINGLE_STOCK_RESEARCH}>Stock Lookup</NavLink>
      <NavLink className="nav-link" to={ROUTES.DD}>Research </NavLink>
      <NavLink className="nav-link" to={ROUTES.NOTES}>Notes </NavLink>
      <NavLink className="nav-link" to={ROUTES.UNUSUAL_OPTIONS}>Options Feed</NavLink>
      <NavLink className="nav-link" to={ROUTES.NEWS_FEED}>News Feed</NavLink>
      <NavLink className="nav-link" to={ROUTES.ABOUT}>About </NavLink>
      <NavLink to={ROUTES.LOGIN}><Button variant="primary">Log In/Sign Up</Button></NavLink>
    </Nav>
  </Navbar>
);
const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    isAuthed: auth.isAuthed,
  };
};

export default connect(mapStateToProps)(Navigation);

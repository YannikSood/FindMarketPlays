import React from 'react';
import { NavLink, useHistory, withRouter } from 'react-router-dom';
//Local Imports
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as ROUTES from '../routes/routes';
import firebase from '../firebase/firebase';

const Navigation = ({ isAuthed, location }) => (
  <div>{isAuthed ? NavigationAuth(location): NavigationNonAuth(location)}</div>
);
const NavigationAuth = (location) => {
  const history = useHistory();
  return (
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
        <Nav activeKey={location.pathname}>
          <Nav.Link className="nav-link" href={`${ROUTES.DASHBOARD}`}>Market Overview</Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.SINGLE_STOCK_RESEARCH}`}>
            Stock Lookup
          </Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.DD}`}>Research </Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.NOTES}`}>Notes </Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.UNUSUAL_OPTIONS}`}>Options Feed</Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.NEWS_FEED}`}>News Feed</Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.PROFILE}`}>Account</Nav.Link>
          {/* <Nav.Link className="nav-link" to={ROUTES.ABOUT}>About </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
      <Button
        className="ml-2"
        variant="primary"
        onClick={() => {
          firebase.auth().signOut();
          history.push('/')
        }}
      >
        Sign Out
      </Button>
    </Navbar>
  )
};

const NavigationNonAuth = (location) => {
  return (
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
        {/* <Nav activeKey={location.pathname}> */}
          {/* <Nav.Link className="nav-link" href={`${ROUTES.DASHBOARD}`}>Market Overview</Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.SINGLE_STOCK_RESEARCH}`}>
            Stock Lookup
          </Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.DD}`}>Research </Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.NOTES}`}>Notes </Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.UNUSUAL_OPTIONS}`}>Options Feed</Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.NEWS_FEED}`}>News Feed</Nav.Link> */}
          {/* <Nav.Link className="nav-link" to={ROUTES.ABOUT}>About </Nav.Link> */}
        {/* </Nav> */}
      </Navbar.Collapse>
      <NavLink to={ROUTES.LOGIN}>
        <Button className="ml-2" variant="primary">
          Log In / Sign Up
        </Button>
      </NavLink>
    </Navbar>
  )
};
const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    isAuthed: auth.isAuthed,
  };
};

export default connect(mapStateToProps)(withRouter(Navigation));

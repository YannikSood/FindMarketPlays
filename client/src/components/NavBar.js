import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Navbar, Nav, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as ROUTES from '../routes/routes';
import firebase from '../firebase/firebase';
import '../css/Navbar.css';

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
      <Navbar.Brand href={"/"}>FMP Beta</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav activeKey={location.pathname}>

          <DropdownButton
            drop={"down"}

            className="ml-2"
            title="Stocks Hub"
            // size="md"
            variant="light"
          >
            <Dropdown.Item href={`${ROUTES.DASHBOARD}`}>
              Market Overview
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href={`${ROUTES.SINGLE_STOCK_RESEARCH}`}>
              Single Stock Lookup
            </Dropdown.Item>
          
            
          </DropdownButton>

          <DropdownButton
            className="ml-2"
            title="Research Hub"
            // size="md"
            variant="info"
          >
            <Dropdown.Item href={`${ROUTES.DD}`}>
              Reddit Research
            </Dropdown.Item>
          <Dropdown.Divider />
            <Dropdown.Item href={`${ROUTES.NEWS_FEED}`}>
              News Search
            </Dropdown.Item>
         <Dropdown.Divider />
            <Dropdown.Item href={`${ROUTES.NOTES}`}>
              My Research
            </Dropdown.Item>

          </DropdownButton>

          <DropdownButton
            className="ml-2"
            title="Unusual Options"
            // size="md"
            variant="success"
          >
            <Dropdown.Item href={`${ROUTES.BASIC_UNUSUAL_OPTIONS}`}>
              Search
            </Dropdown.Item>
            <Dropdown.Divider />
              <Dropdown.Item href={`${ROUTES.BASIC_UNUSUAL_OPTIONS_FEED}`}>
                Feed
              </Dropdown.Item>
            <Dropdown.Divider />  
              <Dropdown.Item href={`${ROUTES.ADVANCED_UNUSUAL_OPTIONS}`}>
                Advanced Search
              </Dropdown.Item>
            <Dropdown.Divider />
              <Dropdown.Item href={`${ROUTES.ADVANCED_UNUSUAL_OPTIONS_FEED}`}>
                Advanced Feed
              </Dropdown.Item>
            </DropdownButton>

            <Button class="ml-2" onClick={() => history.push("/stockDiscover")} variant="outline-light">
              Stock Discover
            </Button>
            <Button className="ml-2" onClick={() => history.push("/profile")} variant="outline-light"> Account</Button>

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
      className="justify-content-center d-none d-lg-flex"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Navbar.Brand href={"/"}>FMP Beta</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
      {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        {/* <Nav activeKey={location.pathname}> */}
          {/* <Nav.Link className="nav-link" href={`${ROUTES.DASHBOARD}`}>Market Overview</Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.SINGLE_STOCK_RESEARCH}`}>
            Stock Lookup
          </Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.DD}`}>Research </Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.NOTES}`}>Notes </Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.BASIC_UNUSUAL_OPTIONS}`}>Options Feed</Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.NEWS_FEED}`}>News Feed</Nav.Link>
          {/* <Nav.Link className="nav-link" to={ROUTES.ABOUT}>About </Nav.Link> */}
        {/* </Nav> */}
      {/* </Navbar.Collapse> */}
      {/* <NavLink to={ROUTES.LOGIN}>
        <Button className="ml-2" variant="primary">
          Log In / Sign Up
        </Button>
      </NavLink> */}
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

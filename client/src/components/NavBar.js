import React, {useState} from 'react';
import { useHistory, withRouter, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as ROUTES from '../routes/routes';
import firebase from '../firebase/firebase';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../css/Navbar.css';
import logo from './Logos/fmp-dark-bg.png'

const Navigation = ({ isAuthed, location }) => (
  <div>{isAuthed ? NavigationAuth(location): NavigationNonAuth(location)}</div>
);
const NavigationAuth = (location) => {
  const [SBstatus, setSB] = useState();
  const history = useHistory();

  const showSB = () => {
    if (SBstatus) {
      return (
        <ProSidebar className="sidebar">
          <Menu iconShape="square">
            <i onClick={() => setSB(false)} class="menu-icon fa-2x fa fa-bars" aria-hidden="true"></i>
            {/* <MenuItem onClick={() => setSB(false)}>FMP Beta</MenuItem> */}
            {/* <MenuItem >Dashboard</MenuItem> */}
            <SubMenu title="Stocks Hub" >
              <MenuItem><Link onClick={() => setSB(false)} to="/market">Market Overview</Link></MenuItem>
              <MenuItem><Link onClick={() => setSB(false)} to="/stock">Single Stock Lookup</Link></MenuItem>
            </SubMenu>
            <SubMenu title="Research Hub" >
              <MenuItem><Link onClick={() => setSB(false)} to="/DD">Reddit Research</Link></MenuItem>
              <MenuItem><Link onClick={() => setSB(false)} to="newsFeed">News Search</Link></MenuItem>
              <MenuItem><Link onClick={() => setSB(false)} to="/notes">My Research</Link></MenuItem>
            </SubMenu>
            <SubMenu title="Unusual Options" >
              <MenuItem><Link onClick={() => setSB(false)} to="/basicOptionSearch">Search</Link></MenuItem>
              <MenuItem><Link onClick={() => setSB(false)} to="/basicOptionFeed">Feed</Link></MenuItem>
              <MenuItem><Link onClick={() => setSB(false)} to="/advancedOptionSearch">Advanced Search</Link></MenuItem>
              <MenuItem><Link onClick={() => setSB(false)} to="/advOptionFeed">Advanced Feed</Link></MenuItem>
            </SubMenu>
            <MenuItem><Link onClick={() => setSB(false)} to="/sdScreen">Stock Discover</Link></MenuItem>
            <MenuItem><Link onClick={() => setSB(false)} to="/profile">Account</Link></MenuItem>
            <MenuItem className="signout"><Link onClick={() => {
              firebase.auth().signOut();
              history.push('/')
              setSB(false)
              }} to="/profile">Sign Out</Link></MenuItem>
          </Menu>
        </ProSidebar>
      )
    } else {
      return (
        <ProSidebar width={100} collapsed={true} className="sidebar-c">
          <Menu iconShape="square" className="menu-c">
            <i onClick={() => setSB(true)} class="menu-icon fa-2x fa fa-bars" aria-hidden="true"></i>
          </Menu>
        </ProSidebar>
      )
    }
  }
  return (
      <Container className="navbarContainer m-0 p-0"> 
          <Navbar
            // collapseOnSelect
            // expand="sm"
            className="justify-content-center navbar"
            // className="justify-content-center d-none d-lg-flex"
            // bg="dark"
            // variant="dark"
            fixed="top"
          >
            <Navbar.Brand href={"/"}>
              <img
              src={logo}
              width="220"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="d-flex justify-content-right" activeKey={location.pathname}>
                <DropdownButton
                  drop={"down"}
                  className="ml-2 d-none d-lg-flex"
                  // className="ml-2"
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
                  className="ml-2 d-none d-lg-flex"
                  // className="ml-2"
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
                // className="ml-2"
                className="ml-2 d-none d-lg-flex"
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
            </DropdownButton>{' '} 

           
            <Button className="ml-2 d-none d-lg-flex" onClick={() => history.push("/sdScreen")} variant="outline-light"> Stock Discover</Button>
            <Button className="ml-2 d-none d-lg-flex" onClick={() => history.push("/profile")} variant="outline-light"> Account</Button>

        </Nav>
      </Navbar.Collapse>
      <Button
        className="d-none d-sm-flex"
        variant="primary"
        onClick={() => {
          firebase.auth().signOut();
          history.push('/')
        }}
      >
        Sign Out
      </Button>
    </Navbar>
    {showSB()}
  </Container>
  )
};

const NavigationNonAuth = (location) => {
  const history = useHistory();
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      className="justify-content-center"
      // className="justify-content-center d-none d-lg-flex"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Navbar.Brand href={"/"}>
            <img
            src={logo}
            width="220"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"> */}
        {/* <Nav activeKey={location.pathname}>
          <Nav.Link className="nav-link" href={`${ROUTES.DASHBOARD}`}>Market Overview</Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.SINGLE_STOCK_RESEARCH}`}>
            Stock Lookup
          </Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.DD}`}>Research </Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.NOTES}`}>Notes </Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.BASIC_UNUSUAL_OPTIONS}`}>Options Feed</Nav.Link>
          <Nav.Link className="nav-link" href={`${ROUTES.NEWS_FEED}`}>News Feed</Nav.Link>
          <Nav.Link className="nav-link" to={ROUTES.ABOUT}>About </Nav.Link>

          <Button class="ml-2" onClick={() => history.push("/login")} variant="primary">
              Login/Signup
          </Button> */}

        {/* </Nav> */}
      {/* </Navbar.Collapse> */}
      {/* <Button class="ml-2" onClick={() => history.push("/login")} variant="primary">
          Login/Signup
        </Button> */}

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

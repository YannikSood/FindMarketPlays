import React from 'react';

//Local Imports
import "./App.css"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavLink from "react-bootstrap/NavLink"
// import './node_modules/bootstrap/dist/css/bootstrap.min.css';



class Navigation extends React.Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand>Platform</Navbar.Brand> 
              <Nav>
                <Nav.Link href = "/">Dashboard</Nav.Link>
                {/* <Badge variant="light"></Badge> */}
                
                <Nav.Link href = "/stock">Stock Research</Nav.Link>

                <Nav.Link href = "/DD">DD </Nav.Link>

                <Nav.Link href = "/optionFeed" >Options Feed</Nav.Link>

                {/* <Nav.Link href = "/chat">Chatroom </Nav.Link> */}

                <Nav.Link href = "/about">About </Nav.Link>
            </Nav>
        </Navbar>
    )
  }
}

export default Navigation;
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

class Footer extends React.Component {

    render() {
        return (
                <Navbar bg="dark" variant="dark" fixed="bottom">
                        <Nav>
                            <Nav.Link href = "/about">Copyright 2020 | FindMarketPlays.com</Nav.Link>
                        </Nav>
                </Navbar>
        )
    }
}

export default Footer;
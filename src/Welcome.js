import React from 'react';
// import Navigation from './NavBar';
import Container from "react-bootstrap/Container"
import Badge from "react-bootstrap/Badge"
import "./App.css"

class Welcome extends React.Component {
    render() {
        return (
            <div>
                    <Container>
                    <h1><Badge variant="light">Dashboard</Badge></h1>
                    </Container>
            </div>
        );
    }
  }
  
  export default Welcome;
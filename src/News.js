import React from 'react';
// import Navigation from './NavBar';
import Container from "react-bootstrap/Container"
import Badge from "react-bootstrap/Badge"

class News extends React.Component {
    render() {
        return (
            <div>
                    <Container>
                    <h1><Badge variant="secondary">News</Badge></h1>
                    </Container>
            </div>
        );
    }
  }
  
  export default News;
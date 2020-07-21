import React from 'react';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Badge from "react-bootstrap/Badge";

class Chat extends React.Component {
    render() {
        return (
            <div class = "About">
             <Container fluid>
             <h1><Badge variant="light">Chatroom Coming Soon:</Badge></h1>
             <h5><Badge variant="light">The chat feature will be a premium feature only,  </Badge></h5>
             <h5><Badge variant="light">used to discuss stock and option trades with like minded </Badge></h5>
             <h5><Badge variant="light">individuals. </Badge></h5>
             </Container>
             
             
             <Footer></Footer>
            </div>

        );
    }
  }
  
  export default Chat;
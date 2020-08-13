import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

const About = () => (
  <div className="About">
    <Container fluid>
      <h1><Badge variant="light">About FindMarketPlays.com</Badge></h1>
      <p>
        If you enjoy the platform, enter to win a $25 amazon gift card by completing the 2 minute survey found
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7hm_zUyg7aq-5RpidY49DHNpefFwk6um3JxDPpbOwLwYSag/viewform?usp=pp_url"> here. </a>
        Happy Trading!
      </p>
    </Container>
  </div>

);

export default About;

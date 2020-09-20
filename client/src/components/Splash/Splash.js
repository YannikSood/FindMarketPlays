import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory, Link } from "react-router-dom";
import logo from '../Logos/fmp-dark-transparent-bg_2.png';
import { connect } from "react-redux";

const Splash = ({isAuthed}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/sdScreen");
    }

    return (
      <Container>
        <Row>
          <Col className="text-center pt-5 mt-5">
          <img
            src={logo}
            width="320"
            height="170"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-2">
            <p>
                Simple trading research is overdue
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button onClick={() => handleClick()} variant="light">Get Started</Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-1">
            <Link to={"/tos"} className="text-muted">Terms of Service</Link>
          </Col>
        </Row>
      </Container>
    );
}

const MSTP = state => ({
  isAuthed: state.auth.isAuthed
})

export default connect(MSTP)(Splash);
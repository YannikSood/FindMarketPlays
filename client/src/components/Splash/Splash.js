import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../scss/custom.scss';
import Button from "react-bootstrap/Button";
import { useHistory, Link } from "react-router-dom";

const Splash = () => {
    const history = useHistory();
    return (
      <Container>
        <Row>
          <Col className="text-center pt-5 mt-5">
            <h1>FindMarketPlays</h1>
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
            <Button onClick={() => history.push("/login")} variant="light">Get Started</Button>
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

export default Splash;
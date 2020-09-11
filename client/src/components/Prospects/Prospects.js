import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import ProspectsFlow from './ProspectsFlow';

const Prospects = ({isAuthed, prospect}) => {
    const history = useHistory();

    useEffect(() => {
        if (!isAuthed) {
            history.push('/login')
        }
    }, [])

    return (
      <Container>
        <Row className="d-flex justify-content-center mb-5">
          <h1>Prospects</h1>
        </Row>
        <Row>
          <Col>
            <Row>
              <h2>Data</h2>
            </Row>
            <Row>Company: {prospect.name}</Row>
            <Row>Symbol: {prospect.symbol}</Row>
          </Col>
          <Col>
            {/* <Row>My Matches</Row> */}
            {/* {ProspectsFlow([
                {name: "Apple",
                symbol: "AAPL"
                },
                {name: "Tesla",
                symbol: "TSLA"
                }
            ])} */}
            <ProspectsFlow
              value={[
                { name: "Apple", symbol: "AAPL" },
                { name: "Tesla", symbol: "TSLA" },
              ]}
            />
          </Col>
        </Row>
      </Container>
    );
}

const MSTP = state => ({
    isAuthed: state.auth.isAuthed,
    prospect: state.prospect
})

export default connect(MSTP)(Prospects);
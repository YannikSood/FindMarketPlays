import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { receiveProspect } from '../../actions/prospect';
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ProspectsFlow = props => {
    const [prospect, setProspect] = useState();

    if (props.value) {
      return (
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Matches</th>
            </tr>
          </thead>
          <tbody>
            {props.value.map(company => (
              <tr>
                  <td onClick={() => props.receiveProspect(company)}>{company.name}</td>
              </tr>
          ))}
          </tbody>
        </Table>
      )
      } else {
        return (
          <Container>
            <Row>Loading Data...</Row>
          </Container>
        )
      }
}

const MDTP = (dispatch) => ({
  receiveProspect: (prospect) => dispatch(receiveProspect(prospect)),
});


export default connect(null, MDTP)(ProspectsFlow);

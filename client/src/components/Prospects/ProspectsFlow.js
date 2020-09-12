import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { receiveProspect } from '../../actions/prospect';
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Axios from "axios";

const ProspectsFlow = props => {
    const [prospect, setProspect] = useState();
    let [deletedIdx, deletingIdx] = useState('deleted');

    useEffect(() => {

    }, [deletedIdx]) 

    const handleClick = (idx) => {
      let url = `prospects/${props.currentUser.email}/${idx}`;
      // console.log(deletedIdx);
      Axios.delete(url, {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        deletingIdx('deleted');
        // console.log(deletedIdx);
      })
      .catch(err => console.log(err))
    }

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
              <tr key={`${company.idx}`}>
                  <td onClick={() => props.receiveProspect(company)}>{company.name}</td>
                  <td onClick={() => handleClick(company.idx)} >Discard</td>
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

const MSTP = state => ({
  currentUser: state.auth.currentUser
})

const MDTP = (dispatch) => ({
  receiveProspect: (prospect) => dispatch(receiveProspect(prospect)),
});


export default connect(MSTP, MDTP)(ProspectsFlow);

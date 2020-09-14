import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { receiveProspect } from '../../actions/prospect';
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Axios from "axios";
import { receiveDeletedProspect } from '../../actions/deletedProspect';

// the table does not update after deleting clicking "Discard"
// POSSIBLE SOLUTION: update the props given to it, or give it again after deleting a stock


const ProspectsFlow = props => {
    const [prospects, setProspects] = useState();
    const [prospect, setProspect] = useState();
    let [deletedIdx, deletingIdx] = useState('deleting');

    // handle Axios call to server on click of "Discard"
    const handleClick = (idx) => {
      let url = `prospects/${props.currentUser.email}/${idx}`;
      Axios.delete(url, {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        setProspects(res.data.message);
        props.receiveDeletedProspect(res.data.message);
        // take the array of data and pass it BACK to the table??
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
                  <td onClick={() => 
                    {
                      handleClick(company.idx)
                      // deletingIdx(company.idx)
                    }} 
                    >Discard</td>
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
  receiveDeletedProspect: deletedProspect => dispatch(receiveDeletedProspect(deletedProspect))
});


export default connect(MSTP, MDTP)(ProspectsFlow);

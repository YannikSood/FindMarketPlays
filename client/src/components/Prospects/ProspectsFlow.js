import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { receiveProspect } from '../../actions/prospect';
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Axios from "axios";
import { receiveDeletedProspect } from '../../actions/deletedProspect';
import { receiveDeletingProspect } from '../../actions/deletingProspect';

// the table does not update after deleting clicking "Discard"
// POSSIBLE SOLUTION: update the props given to it, or give it again after deleting a stock


const ProspectsFlow = props => {

    const [inProgress, setProgress] = useState(false);

    // handle Axios call to server on click of "Discard"
    const handleClick = (idx) => {
      if (!inProgress) {
        props.receiveDeletingProspect(true);
        setProgress(true)
        let url = `prospects/${props.currentUser.email}/${idx}`;
        Axios.delete(url, {
          headers: { "Content-Type": "application/json" }
        })
        .then(res => {
          // set deleting loader
          props.receiveDeletingProspect(false);
  
          // set deleted prospect to state so that the prospects component 
          // knows to re-fetch data for table. re-renders
          props.receiveDeletedProspect(res.data.message);

          // set loading loader
          setProgress(false)
        })
        .catch(err => console.log(err))
      }

    }
    debugger
    console.log(props.value)
    if (props.value) {
      return (
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Matches</th>
            </tr>
          </thead>
          <tbody >
            {props.value.map(company => (
              <tr key={`${company.idx}`}>
                  <td id="row" onClick={() => props.receiveProspect(company)}>{company.name}</td>
                  <td id="row" onClick={() => 
                    {
                      handleClick(company.idx)
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
  receiveDeletedProspect: deletedProspect => dispatch(receiveDeletedProspect(deletedProspect)),
  receiveDeletingProspect: deletingProspect => dispatch(receiveDeletingProspect(deletingProspect))

});


export default connect(MSTP, MDTP)(ProspectsFlow);

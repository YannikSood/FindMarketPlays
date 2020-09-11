import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import { receiveProspect } from '../../actions/prospects';

const ProspectsFlow = (props) => {
    let prospects = props.value;
    const [prospect, setProspect] = useState(prospects[0]);

    useEffect(() => {
        props.receiveProspect(prospect);
    }, [prospect]);

    return (
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Matches</th>
          </tr>
        </thead>
        {/* {console.log(props.value)} */}
        {/* {props.value.map(item => ( */}
        <tbody>
          {prospects.map(company => (
            <tr>
                <td onClick={() => setProspect(company)}>{company.name}</td>
            </tr>
        ))}
        </tbody>
      </Table>
    );
}

const MDTP = dispatch => ({
    receiveProspect: prospect => dispatch(receiveProspect(prospect)) 
})

export default connect(null, MDTP)(ProspectsFlow);
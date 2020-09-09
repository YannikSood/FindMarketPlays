import React from 'react';
import Table from 'react-bootstrap/Table';

const SDFlow = props => {
  // console.log(props.value)
  let stock = props.value;
  return (
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Ticker</th> 
          <th>Company</th>
          <th>Latest Price</th>
        </tr>
      </thead>
      {/* {console.log(props.value)} */}
      {/* {props.value.map(item => ( */}
      <tbody>
        <tr>
          <td>{stock.symbol}</td>
          <td>{stock.companyName}</td>
          <td>${stock.latestPrice}</td>
        </tr>
      </tbody>
      {/* ))} */}
    </Table>
  )
};

export default SDFlow;
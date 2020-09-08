import React from 'react';
import Table from 'react-bootstrap/Table';

const SDFlow = props => (
  <Table responsive striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Ticker</th> 
        <th>Price</th>
      </tr>
    </thead>
    {props.value.map(item => (
      <tbody>
        <tr>
          <td>{item.symbol}</td>
          <td>{item.latestPrice}</td>
        </tr>
      </tbody>
    ))}
  </Table>
);

export default SDFlow;
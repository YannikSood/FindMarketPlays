import React from 'react';
import Table from 'react-bootstrap/Table';

const UnusualOptionsFlow = props => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Date Of Order</th>
        <th>Ticker</th>
        <th>Description</th>
        <th>Sentiment</th>
        <th># of Contracts</th>
        <th>Put/Call</th>
        {/* 
        <th>EXP [YYYY-MM-DD]</th>
        <th>Strike Price</th> */}
      </tr>
    </thead>
    {props.value.map(item => (
      <tbody key={item.id}>
        <tr>
          <td>{item.date}</td>
          <td>{item.ticker}</td>
          <td>{item.description}</td>
          <td>{item.sentiment}</td>
          <td>{item.size}</td>
          <td>{item.put_call}</td>
          {/* 
          <td>{item.date_expiration}</td>
          <td>{item.strike_price}</td> */}
        </tr>
      </tbody>
    ))}
  </Table>
);


export default UnusualOptionsFlow;

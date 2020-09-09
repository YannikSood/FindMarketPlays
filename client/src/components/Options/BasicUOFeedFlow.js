import React from 'react';
import Table from 'react-bootstrap/Table';

const BasicUOFeedFlow = props => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Order Date</th>
        <th>Ticker</th>
        <th>Description</th>
        <th>Sentiment</th>
      </tr>
    </thead>
    {props.value.map(item => (
      
      <tbody key={item.id}>
        
        <tr>
          <td>{item.date}</td>
          <td>{item.ticker}</td>
          <td>Someone spent {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }).format( item.cost_basis)} on {item.size} {item.ticker} ${item.strike_price} {item.put_call}S, expiring on {item.date_expiration}.</td>
          <td>{item.sentiment}</td>
        </tr>
      </tbody>
    ))}
  </Table>
);

export default BasicUOFeedFlow;

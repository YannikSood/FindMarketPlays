import React from 'react';
import Table from 'react-bootstrap/Table';

const BasicOptionsFlow = props => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Order Date</th>
        {/* <th>Ticker</th> */}
        <th>Description</th>
        <th>Sentiment</th>
        {/* <th># of Contracts</th> */}
        {/* <th>Put/Call</th>
        <th>Expiration</th>
        <th>Strike</th> 

        <th>Cost</th>
        <th>Type</th>  */}
      </tr>
    </thead>
    {props.value.map(item => (
      
      <tbody key={item.id}>
        
        <tr>
          <td>{item.date}</td>
          {/* <td>{item.ticker}</td> */}
          <td>Someone spent {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }).format( item.cost_basis)} on {item.size} {item.ticker} ${item.strike_price} {item.put_call} options, expiring on {item.date_expiration}.</td>
          <td>{item.sentiment}</td>
          {/* <td>{item.size}</td> */}
          {/* <td>{item.put_call}</td>
          <td>{item.date_expiration}</td>
          <td>{item.strike_price}</td>

          <td>{item.cost_basis}</td>
          <td>{item.option_activity_type}</td> */}
        </tr>
      </tbody>
    ))}
  </Table>
);

//Someone spent [cost_basis] on [size] [ticker] [put_call] options, expiring [date_expiration]. This is a [sentiment] trade.
//{new Intl.DateTimeFormat('en-US', {
// year: 'numeric', 
// month: '2-digit',
// day: '2-digit'}).format(new Date(Number()))} Date Format?? 

//Bullish ? Bearish ? Neutral  This is a {item.sentiment} trade.

export default BasicOptionsFlow;

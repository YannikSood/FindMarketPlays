import React from 'react';
import Table from 'react-bootstrap/Table';

const AdvancedUnusualOptionsFlow = props => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Order Date</th>
        {/* <th>Ticker</th> */}
        <th>Cost Basis</th>
        <th>Contracts</th>
        <th>Order Size</th>
        <th>Volume</th>
        <th>Open Interest</th>
        <th>Trade Type</th> 
      </tr>
    </thead>
    {props.value.map(item => (
      
      <tbody key={item.id}>
        
        <tr>
          <td>{item.date}</td>
          <td>Someone spent {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }).format( item.cost_basis)}</td>

          <td>{item.ticker} ${item.strike_price} {item.put_call} options</td>
          <td>{item.size}</td> 
         
          <td>{item.volume}</td>
          <td>{item.open_interest}</td>
          <td>{item.option_activity_type}</td>
        </tr>
      </tbody>
    ))}
  </Table>
);

export default AdvancedUnusualOptionsFlow;
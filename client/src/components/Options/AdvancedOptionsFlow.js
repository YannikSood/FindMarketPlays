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
        <th>Vol/OI</th>
        <th>Trade Type</th> 
      </tr>
    </thead>
    {props.value.map(item => (
      
      <tbody key={item.id}>
        
        <tr>
          <td>{item.date}</td>
          <td>{new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }).format( item.cost_basis)}</td>

          <td>{item.size} {item.ticker} ${item.strike_price} {item.put_call}S expiring {item.date_expiration}</td>
          <td>{item.volume}/{item.open_interest}</td>
          <td>{item.option_activity_type}</td>
        </tr>
      </tbody>
    ))}
  </Table>
);

export default AdvancedUnusualOptionsFlow;
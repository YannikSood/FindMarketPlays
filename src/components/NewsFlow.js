import React from 'react';
import Table from 'react-bootstrap/Table';

const NewsFlow = props => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Title</th>
        <th>URL</th>
      </tr>
    </thead>
    {props.value.map(item => (
      <tbody key={item.id}>
          <tr>
            <td>{item.title}</td>
            <td>{item.url}</td>
          </tr>
      </tbody>
    ))}
  </Table>
);


export default NewsFlow;

import React from 'react';
import Table from 'react-bootstrap/Table';

const NewsFlow = props => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Title</th>
      </tr>
    </thead>
    {props.value.map(item => (
      <tbody key={item.id}>
        <tr>
          <td><a href={item.url} target="popup">{item.title}</a></td>
        </tr>
      </tbody>
    ))}
  </Table>
);


export default NewsFlow;

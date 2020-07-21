import React from 'react';

import Table from 'react-bootstrap/Table';
import "./App.css"

class UnusualOptionsFlow extends React.Component {
    constructor(props){
        super(props);
    }
    

    render() {
        return (
            // <div className = "OneStock"
            <Table striped bordered hover variant="dark">
            {/* // <Table responsive> */}
                <thead>
                    <tr>
                        <th>Date [YYYY-MM-DD]</th>
                        <th>Ticker</th>
                        <th>Put/Call</th>
                        <th>EXP [YYYY-MM-DD]</th>
                        <th># of Contracts</th>
                        <th>Strike Price</th>
                        <th>Sentiment</th>
                        <th>Description</th>
                    </tr>
                </thead>
            
                {this.props.value.map(item =>(<tbody key = {item.id}>

                    <td>{item.date}</td>
                    <td>{item.ticker}</td>
                    <td>{item.put_call}</td>
                    <td>{item.date_expiration}</td>
                    <td>{item.size}</td>
                    <td>{item.strike_price}</td>
                    <td>{item.sentiment}</td>
                    <td>{item.description}</td>
                </tbody>))}
            
            </Table>
                
                
            
            // </Container>
        // </div>

        )
    }

}


export default UnusualOptionsFlow;

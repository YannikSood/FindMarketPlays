import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Image from 'react-bootstrap/Image'

const SDFlow = props => {
  let stock = props.value;
  let company = props.companyInfo;
  let logo = props.logo;
  return (
    <Card  className="bg-dark text-white" style={{ width: '24rem', height: '24rem'}}>
        
            <Card.Header as="h5">{company.companyName}</Card.Header>
            
            <Card.Body>

            <Image src={logo.url} roundedCircle />

            <Card.Subtitle>
            ${stock.symbol}
            </Card.Subtitle>


            <Card.Text>
            {company.sector} > {company.industry}
            </Card.Text>

            <Card.Text>
             Latest Price: ${stock.latestPrice}
            </Card.Text>
            
        
            {/* <Table responsive  variant="dark">
                <thead>
                    <tr>
                    <th>Ticker</th> 
                    <th>Company</th>
                    <th>Latest Price</th>
                    </tr>
                </thead>
                {/* {console.log(props.value)} */}
                {/* {props.value.map(item => ( */}
                {/* <tbody>
                    <tr>
                    <td>{stock.symbol}</td>
                    <td>{stock.companyName}</td>
                    <td>${stock.latestPrice}</td>
                    </tr>
                </tbody> */}
                {/* ))} */}
                {/* </Table> */} 
        </Card.Body>
    </Card>
    
  )
};

export default SDFlow;
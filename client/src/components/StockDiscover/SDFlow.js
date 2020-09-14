import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Image from 'react-bootstrap/Image';
import "../../css/SDScreen.css";

const SDFlow = props => {
  let stock = props.value;
  let company = props.companyInfo;
  let logo = props.logo;
  let logoUrl = logo.url ? logo.url : "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/IXG.png";
  return (
    // at 767 pixels, we change its width to 24rem
    <Card
      className="bg-dark text-white"
      style={{ height: "100%", width: "100%" }}
    >
      {/* // <Card  className="bg-dark text-white" style={{ height: '515px'}}> */}
      <Card.Body>
        <Card.Title>{stock.companyName} </Card.Title>
        <div id="background">
          <Image className="image" src={logoUrl} roundedCircle />
        </div>

        <Card.Subtitle>${stock.symbol}</Card.Subtitle>

        <Card.Text>
          {company.sector} > {company.industry}
        </Card.Text>

        <Card.Text>Latest Price: ${stock.latestPrice}</Card.Text>

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
  );
};

export default SDFlow;
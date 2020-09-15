import React from 'react';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';

// import Button from 'react-bootstrap/Button'
// import TradingViewWidget, { Themes } from 'react-tradingview-widget';
// import Container from 'react-bootstrap/Container';
// import Table from 'react-bootstrap/Table';

import "../../css/SDScreen.css";

const SDFlow = props => {
  let stock = props.value;
  let company = props.companyInfo;
  let logo = props.logo;
  let logoUrl = logo.url ? logo.url : "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/IXG.png";
  let companyDescription = company.description ? company.description : "No Company Description Available";
  let companyWebsite = company.website ? "See Website" : "";
  
  return (
    // at 767 pixels, we change its width to 24rem
    <Card
      className="discover-card"

      style={{ height: "100%", width: "100%" }}
    >
      <Card.Header as="h5">{stock.companyName} [${stock.symbol}]</Card.Header>
      {/* // <Card  className="bg-dark text-white" style={{ height: '515px'}}> */}
      <Card.Body>

      <Card.Title>${stock.symbol} is currently ${stock.latestPrice}</Card.Title>
        <Card.Subtitle>{company.sector}, {company.industry}</Card.Subtitle>
        {/* <Card.Title> </Card.Title> */}
        <div id="background">
          <Image className="image" src={logoUrl} roundedCircle />
        </div>
          

        <Card.Text>{companyDescription}</Card.Text>
        <Card.Text className="discover-link"><a href={company.website} target="popup">{companyWebsite}</a></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SDFlow;
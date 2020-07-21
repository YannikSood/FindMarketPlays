import React from 'react';

class EconDataWidget extends  React.Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js"
        script.async = true;
        script.innerHTML = JSON.stringify(
              {
              "colorTheme": "dark",
              "isTransparent": false,
              "width": "400",
              "height": "600",
              "locale": "en",
              "importanceFilter": "0,1",
              "currencyFilter": "CNY,USD,GBP,SAR"
            }
       )
        document.getElementById("myContainer1").appendChild(script);
    }

    render() {
        return(
      <div id="myContainer1">
        <div className="tradingview-widget-container">
           <div className="tradingview-widget-container__widget">
            </div>
        </div>
     </div>
        );
    }
}

export default EconDataWidget;
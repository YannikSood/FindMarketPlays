import React from 'react';

class EconDataWidget extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.async = true;
    script.innerHTML = JSON.stringify(
      {
        colorTheme: 'dark',
        isTransparent: false,
        width: '370',
        height: '600',
        locale: 'en',
        importanceFilter: '0,1',
        currencyFilter: 'CNY,USD,GBP,SAR',
      },
    );
    document.getElementById('EconDataWidget').appendChild(script);
  }

  render() {
    return (
      <div id="EconDataWidget" />
    );
  }
}

export default EconDataWidget;

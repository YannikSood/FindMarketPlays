import React from 'react';

class ScrollingWidget extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify(
      {
        symbols: [
          {
            proName: 'AMEX:SPY',
            title: 'SPY',
          },
          {
            proName: 'NASDAQ:NDAQ',
            title: 'NDAQ',
          },
          {
            proName: 'NASDAQ:QQQ',
            title: 'QQQ',
          },
          {
            proName: 'FX_IDC:EURUSD',
            title: 'EUR/USD',
          },
          {
            proName: 'BITSTAMP:BTCUSD',
            title: 'BTC/USD',
          },

        ],
        colorTheme: 'dark',
        isTransparent: false,
        displayMode: 'adaptive',
        locale: 'en',
      },
    );
    document.getElementById('ScrollingWidget').appendChild(script);
  }

  render() {
    return (
      <div id="ScrollingWidget" />
    );
  }
}

export default ScrollingWidget;

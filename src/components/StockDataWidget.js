import React from 'react';

class StockDataWidget extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify(
      {
        colorTheme: 'dark',
        dateRange: '12m',
        showChart: true,
        locale: 'en',
        largeChartUrl: '',
        isTransparent: true,
        width: '400',
        height: '600',
        plotLineColorGrowing: 'rgba(33, 150, 243, 1)',
        plotLineColorFalling: 'rgba(33, 150, 243, 1)',
        gridLineColor: 'rgba(240, 243, 250, 1)',
        scaleFontColor: 'rgba(120, 123, 134, 1)',
        belowLineFillColorGrowing: 'rgba(33, 150, 243, 0.12)',
        belowLineFillColorFalling: 'rgba(33, 150, 243, 0.12)',
        symbolActiveColor: 'rgba(33, 150, 243, 0.12)',

      },
    );
    document.getElementById('StockDataWidget').appendChild(script);
  }

  render() {
    return (
      <div id="StockDataWidget" />
    );
  }
}

export default StockDataWidget;

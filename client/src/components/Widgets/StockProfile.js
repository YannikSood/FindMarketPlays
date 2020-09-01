import React from 'react';

class StockProfile extends React.Component {
  componentDidMount() {
    this.addWidget();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.addWidget();
    }
  }

  addWidget = () => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js';
    script.async = true;
    script.innerHTML = JSON.stringify(
      {
        symbol: this.props.value,
        width: 380,
        height: 240,
        colorTheme: 'dark',
        isTransparent: false,
        locale: 'en',
      },
    );
    document.getElementById('StockProfile').innerHTML = '';
    document.getElementById('StockProfile').appendChild(script);
  }

  render() {
    return (
      <div id="StockProfile" className="widget__wrapper" />
    );
  }
}

export default StockProfile;

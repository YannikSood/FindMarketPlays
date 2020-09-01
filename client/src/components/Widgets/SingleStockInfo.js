import React from 'react';

class SSIWidget extends React.Component {
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
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js';
      script.async = true;
      script.innerHTML = JSON.stringify(
        {
          symbol: this.props.value,
          width: 380,
          locale: 'en',
          colorTheme: 'dark',
          isTransparent: false,
        },
      );
      document.getElementById('SSIWIdget').innerHTML = '';
      document.getElementById('SSIWIdget').appendChild(script);
    }

    render() {
      return (
        <div id="SSIWIdget" className="widget__wrapper" />
      );
    }
}

export default SSIWidget;

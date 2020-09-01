import React from 'react';

class TAWidget extends React.Component {
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
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script.async = true;
    script.innerHTML = JSON.stringify(
      {
        interval: '1m',
        width: "100%",
        // width: 380,
        isTransparent: false,
        // height: '100%',
        height: 450,
        symbol: this.props.value,
        showIntervalTabs: true,
        locale: 'en',
        colorTheme: 'dark',
      },
    );
    document.getElementById('TAWidget').innerHTML = '';
    document.getElementById('TAWidget').appendChild(script);
  }

  render() {
    return (
      <div style={{paddingBottom: 20 + 'px'}} id="TAWidget" className="widget__wrapper" />
    );
  }
}

export default TAWidget;

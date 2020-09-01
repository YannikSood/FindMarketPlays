import React from 'react';

class SSFWidget extends React.Component {
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
     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
     script.async = true;
     script.innerHTML = JSON.stringify(
       {
         symbol: this.props.value,
         colorTheme: 'dark',
         isTransparent: false,
         largeChartUrl: '',
         displayMode: 'regular',
        //  width: 380,
        width: "100%",
         height: 450,
         locale: 'en',
       },
     );
     document.getElementById('SSFWidget').innerHTML = '';
     document.getElementById('SSFWidget').appendChild(script);
   }

   render() {
     return (
       <div id="SSFWidget" className="widget__wrapper" />
     );
   }
}

export default SSFWidget;

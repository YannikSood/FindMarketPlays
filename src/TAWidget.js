import React from 'react';

class TAWidget extends  React.Component {
    constructor(props){
        super(props);
    }
    
    AddWidget = () => {
        const script = document.createElement('script');
        script.src ="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
        script.async = true;
        script.innerHTML = JSON.stringify(
            {
                "interval": "1m",
                "width": 425,
                "isTransparent": false,
                "height": 450,
                "symbol": this.props.value,
                "showIntervalTabs": true,
                "locale": "en",
                "colorTheme": "dark"
              }
        )
        document.getElementById("myContainer4").innerHTML = '';
        document.getElementById("myContainer4").appendChild(script); 
    }

    componentDidMount() {
        this.AddWidget();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.value !== this.props.value) {
            this.AddWidget();
        }
    }

    render() {
        return(
      <div id="myContainer4">
        <div className="tradingview-widget-container">
           <div className="tradingview-widget-container__widget">
            </div>
        </div>
     </div>
        );
    }
}

export default TAWidget;

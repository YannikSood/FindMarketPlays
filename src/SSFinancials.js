import React from 'react';

class SSFWidget extends  React.Component {
    constructor(props){
        super(props);
    }
    
    AddWidget = () => {
        const script = document.createElement('script');
        script.src ="https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
        script.async = true;
        script.innerHTML = JSON.stringify(
            {
                "symbol": this.props.value,
                "colorTheme": "dark",
                "isTransparent": false,
                "largeChartUrl": "",
                "displayMode": "regular",
                "width": 425,
                "height": 450,
                "locale": "en"
              }
       )
        document.getElementById("myContainer5").innerHTML = '';
        document.getElementById("myContainer5").appendChild(script); 
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
      <div id="myContainer5">
        <div className="tradingview-widget-container">
           <div className="tradingview-widget-container__widget">
            </div>
        </div>
     </div>
        );
    }
}

export default SSFWidget;

import React from 'react';

class StockProfile extends  React.Component {
    constructor(props){
        super(props);
    }
    
    AddWidget = () => {
        const script = document.createElement('script');
        script.src ="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
        script.async = true;
        script.innerHTML = JSON.stringify(
            {
                "symbol": this.props.value,
                "width": 480,
                "height": 225,
                "colorTheme": "dark",
                "isTransparent": false,
                "locale": "en"
              }
       )
        document.getElementById("myContainer7").innerHTML = '';
        document.getElementById("myContainer7").appendChild(script); 
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
      <div id="myContainer7">
        <div className="tradingview-widget-container">
           <div className="tradingview-widget-container__widget">
            </div>
        </div>
     </div>
        );
    }
}

export default StockProfile;
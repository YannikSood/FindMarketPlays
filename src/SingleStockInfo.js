import React from 'react';

class SSIWidget extends  React.Component {
    constructor(props){
        super(props);
    }
    
    AddWidget = () => {
        const script = document.createElement('script');
        script.src ="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
        script.async = true;
        script.innerHTML = JSON.stringify(
            {
                "symbol": this.props.value,
                "width": 480,
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": false
            }
        )
        document.getElementById("myContainer6").innerHTML = '';
        document.getElementById("myContainer6").appendChild(script); 
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
            <div id="myContainer6">
                <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget">
                    </div>
                </div>
            </div>
        );
    }
}

export default SSIWidget;
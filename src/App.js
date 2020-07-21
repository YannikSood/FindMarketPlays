import React from 'react';

//Local Imports
import About from "./About";
import OneStock from './OneStock';
import DD from './DD';
import UnusualOptions from './UnusualOptions';
import Chat from './Chat';
import Home from "./Home";
import Navigation from './NavBar';
import {Route} from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  
  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  
    this.setState({ windowWidth, windowHeight });
  }

  render() {  
    return (
      <div>
        <div>
          <Route component = {Chat} path = "/chat" />
          <Route component = {UnusualOptions} path = "/optionFeed" />
          <Route component = {OneStock} path = "/stock" />
          <Route component = {About} path = "/about" />
          <Route component = {DD} path = "/DD" />
          <Route component = {Home} exact path = "/" />
        </div>
        <div>
          <Navigation/>
        </div>
      </div>
      
    );
  }
}

export default App;
import React from 'react';
// import Navigation from './NavBar';
import Dashboard from './Dashboard';
import "./App.css"

class Home extends React.Component {
    render() {
        return (
            <div className = "Home">
                <Dashboard></Dashboard>
            </div>
        );
    }
  }
  
  export default Home;
import React, { Fragment } from 'react';

//Local Imports
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import OneStock from './components/OneStock';
import Home from './components/Home';
import Navigation from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './components/Chat';
import About from './components/About';
import DD from './components/DD';
import UnusualOptions from './components/UnusualOptions';


const App = () => (
  <Fragment>
    <Navigation />
    <div className="app__wrapper">
      <Route component={Chat} path="/chat" />
      <Route component={UnusualOptions} path="/optionFeed" />
      <Route component={OneStock} path="/stock" />
      <Route component={About} path="/about" />
      <Route component={DD} path="/DD" />
      <Route component={Home} exact path="/" />
    </div>
    <Footer />
  </Fragment>
);

export default App;

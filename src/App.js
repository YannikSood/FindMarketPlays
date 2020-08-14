import React, { Fragment } from 'react';

//Local Imports
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import OneStock from './components/OneStock';
import Navigation from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import DD from './components/DD';
import UnusualOptions from './components/UnusualOptions';
import NewsFeed from './components/NewsFeed';
import Dashboard from './components/Dashboard';


const App = () => (
  <Fragment>
    <Navigation />
    <div className="app__wrapper">
      <Route component={UnusualOptions} path="/optionFeed" />
      <Route component={OneStock} path="/stock" />
      <Route component={NewsFeed} path="/newsFeed" />
      <Route component={About} path="/about" />
      <Route component={DD} path="/DD" />
      <Route component={Dashboard} exact path="/" />
    </div>
    <Footer />
  </Fragment>
);

export default App;

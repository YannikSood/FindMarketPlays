import React, { Fragment } from 'react';

//Local Imports
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import OneStock from './components/OneStock';
import Home from './components/Home';
import Navigation from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Fragment>
    <Navigation />
    <div className="app__wrapper">
      <Route component={OneStock} path="/stock" />
      <Route component={Home} exact path="/" />
    </div>
    <Footer />
  </Fragment>
);

export default App;

import React, { Fragment } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  // IfFirebaseAuthed,
  // IfFirebaseAuthedAnd
} from "@react-firebase/auth";

//Local Imports
import Footer from './components/Footer';
import OneStock from './components/OneStock';
import Navigation from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import DD from './components/DD';
import UnusualOptions from './components/UnusualOptions';
import NewsFeed from './components/NewsFeed';
import Notes from './components/Notes';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import * as ROUTES from './routes/routes';
import StripeSubscribe from './components/Stripe/Subscribe';
import Profile from './components/Account/Profile';
// import firebase from './firebase/firebase';

const config = {
  apiKey: 'AIzaSyCU32UjFCylBIswXOL2mSkj01xsr3T5eWE',
  authDomain: 'findmarketplays-f8556.firebaseapp.com',
  databaseURL: 'https://findmarketplays-f8556.firebaseio.com',
  projectId: 'findmarketplays-f8556',
  storageBucket: 'findmarketplays-f8556.appspot.com',
  messagingSenderId: '230930291400',
};

class App extends React.Component {

  render() {
    return (
      <FirebaseAuthProvider firebase={firebase} {...config}>
        
        <Router>
          <Fragment>

          <FirebaseAuthConsumer>
            {({ isSignedIn }) => {
              return (
                <Navigation isAuthed = {isSignedIn}/>
              );
            }}
          </FirebaseAuthConsumer>
            
            <div className="app__wrapper">
              <Switch>
                <Route exact path={ROUTES.DASHBOARD}>
                  <Dashboard />
                </Route>

                <Route path={ROUTES.LOGIN}>
                  <FirebaseAuthConsumer>
                    {({ isSignedIn }) => {
                      return (
                        <Login isAuthed = {isSignedIn}/>
                      );
                    }}
                  </FirebaseAuthConsumer>  
                </Route>

                <Route path={ROUTES.LOGOUT}>
                  <Logout />
                </Route>

                <Route path={ROUTES.REGISTER}>
                <FirebaseAuthConsumer>
                    {({ isSignedIn }) => {
                      return (
                        <Register isAuthed = {isSignedIn}/>
                      );
                    }}
                  </FirebaseAuthConsumer>  
                </Route>

                <Route path={ROUTES.FORGOT_PASSWORD}>
                  <ForgotPassword />
                </Route>

                <Route path={ROUTES.SINGLE_STOCK_RESEARCH}>
                  <OneStock />
                </Route>

                <Route path={ROUTES.DD}>
                  <DD />
                </Route>

                <Route path={ROUTES.NOTES}>
                  <FirebaseAuthConsumer>
                    {({ isSignedIn }) => {
                      return (
                        <Notes isAuthed = {isSignedIn}/>
                      );
                    }}
                  </FirebaseAuthConsumer>  
                </Route>

                <Route path={ROUTES.UNUSUAL_OPTIONS}>
                  <FirebaseAuthConsumer>
                    {({ isSignedIn }) => {
                      return (
                        <UnusualOptions isAuthed = {isSignedIn}/>
                      );
                    }}
                  </FirebaseAuthConsumer>  
                </Route>

                <Route path={ROUTES.NEWS_FEED}>
                  <FirebaseAuthConsumer>
                    {({ isSignedIn }) => {
                      return (
                        <NewsFeed isAuthed = {isSignedIn}/>
                      );
                    }}
                  </FirebaseAuthConsumer>  
                </Route>

                <Route path={ROUTES.STRIPE_SUBSCRIBE}>
                  <StripeSubscribe />
                </Route>

                <Route path={ROUTES.PROFILE}>
                  <Profile />
                </Route>

                <Route path={ROUTES.ABOUT}>
                  <About />
                </Route>

              </Switch>
            </div>
            <Footer />
          </Fragment>
        </Router>
      </FirebaseAuthProvider>
      
    );
  }
}

export default App;

import React, { Fragment, useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Axios from "axios";

//Local Imports
import firebase from './firebase/firebase';
import store from './store';
import Footer from './components/Footer';
import OneStock from './components/Stocks/OneStock';
import Navigation from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import DD from './components/Research/DD';
import UnusualOptions from './components/Options/UnusualOptions';
import NewsFeed from './components/News/NewsFeed';
import Notes from './components/Notes/Notes';
import NoteDetail from './components/Notes/NoteDetail';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import * as ROUTES from './routes/routes';
// import StripeSubscribe from './components/Stripe/Subscribe';
import Profile from './components/Account/Profile';
import NewNote from './components//Notes/NewNote';
import { receiveUser, clearUser } from './reducers/authReducer';
import Loader from './components/Loader';

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setIsLoading(false);
        dispatch(receiveUser(user));
      } else {
        // No user is signed in.
        setIsLoading(false);
        dispatch(clearUser());
      }
    });
  }, [dispatch]);

  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <Provider store={store}>
      { isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Fragment>
            <Navigation />
            <div className="app__wrapper">
              <Switch>
                <Route exact path={ROUTES.DASHBOARD}>
                  <Dashboard />
                </Route>

                <Route path={ROUTES.LOGIN}>
                  <Login />
                </Route>

                <Route path={ROUTES.LOGOUT}>
                  <Login />
                </Route>

                <Route path={ROUTES.REGISTER}>
                  <Register />
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

                <Route path={ROUTES.NEW_NOTE}>
                  <NewNote />
                </Route>

                <Route path={ROUTES.NOTES}>
                  <Notes />
                </Route>

                <Route path={ROUTES.NOTE_DETAIL}>
                  <NoteDetail />
                </Route>

                <Route path={ROUTES.UNUSUAL_OPTIONS}>
                  <UnusualOptions />
                </Route>

                <Route path={ROUTES.NEWS_FEED}>
                  <NewsFeed />
                </Route>

                {/* <Route path={ROUTES.STRIPE_SUBSCRIBE}>
                  <StripeSubscribe />
                </Route> */}

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
      )}
    </Provider>
  );
};

export default App;

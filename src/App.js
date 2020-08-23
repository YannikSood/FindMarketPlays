import React, { Fragment, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Firebase from 'firebase/app';
import 'firebase/auth';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  // IfFirebaseAuthed,
  // IfFirebaseAuthedAnd
} from '@react-firebase/auth';

//Local Imports
import firebase from './firebase/firebase';
import store from './store';
import Footer from './components/Footer';
import OneStock from './components/OneStock';
import Navigation from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import DD from './components/DD';
import UnusualOptions from './components/UnusualOptions';
import NewsFeed from './components/NewsFeed';
import Notes from './components/Notes';
import NoteDetail from './components/NoteDetail';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import * as ROUTES from './routes/routes';
// import StripeSubscribe from './components/Stripe/Subscribe';
import Profile from './components/Account/Profile';
import NewNote from './components/NewNote';
import { receiveUser, clearUser } from './reducers/authReducer';
// import firebase from './firebase/firebase';

// NOTE: Before this goes live, these should be set as secret keys in environment variables
const config = {
  apiKey: 'AIzaSyCU32UjFCylBIswXOL2mSkj01xsr3T5eWE',
  authDomain: 'findmarketplays-f8556.firebaseapp.com',
  databaseURL: 'https://findmarketplays-f8556.firebaseio.com',
  projectId: 'findmarketplays-f8556',
  storageBucket: 'findmarketplays-f8556.appspot.com',
  messagingSenderId: '230930291400',
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        dispatch(receiveUser(user));
      } else {
        // No user is signed in.
        dispatch(clearUser());
      }
    });
  }, [dispatch]);

  return (
    <Provider store={store}>
      <FirebaseAuthProvider firebase={Firebase} {...config}>
        <Router>
          <Fragment>
            <Navigation />

            <div className="app__wrapper">
              <Switch>
                <Route exact path={ROUTES.DASHBOARD}>
                  <Dashboard />
                </Route>

                <Route path={ROUTES.LOGIN}>
                  <FirebaseAuthConsumer>
                    {({ isSignedIn }) => (
                      <Login isAuthed={isSignedIn} />
                    )}
                  </FirebaseAuthConsumer>
                </Route>

                <Route path={ROUTES.LOGOUT}>
                  <Logout />
                </Route>

                <Route path={ROUTES.REGISTER}>
                  <FirebaseAuthConsumer>
                    {({ isSignedIn }) => (
                      <Register isAuthed={isSignedIn} />
                    )}
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

                <Route path={ROUTES.NEW_NOTE}>
                  <FirebaseAuthConsumer>
                    {({ isSignedIn }) => (
                      <NewNote isAuthed={isSignedIn} />
                    )}
                  </FirebaseAuthConsumer>
                </Route>

                <Route path={ROUTES.NOTES}>
                  <Notes />
                </Route>
                <Route path={ROUTES.NOTE_DETAIL}>
                  <NoteDetail />
                </Route>

                <Route path={ROUTES.UNUSUAL_OPTIONS}>
                  <FirebaseAuthConsumer>
                    {({ isSignedIn }) => (
                      <UnusualOptions isAuthed={isSignedIn} />
                    )}
                  </FirebaseAuthConsumer>
                </Route>

                <Route path={ROUTES.NEWS_FEED}>
                  <FirebaseAuthConsumer>
                    {({ isSignedIn }) => (
                      <NewsFeed isAuthed={isSignedIn} />
                    )}
                  </FirebaseAuthConsumer>
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
      </FirebaseAuthProvider>
    </Provider>
  );
};

export default App;

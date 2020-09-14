import React, { Fragment, useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Axios from "axios";
import ReactGa from 'react-ga';

//Local Imports
import firebase from './firebase/firebase';
import { store, persistor } from './store';
import Footer from './components/Footer';
import OneStock from './components/Stocks/OneStock';
import Navigation from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Auth from './components/Research/DDAuth'
// import DD from './components/Research/DD';
import BasicUnusualOptions from './components/Options/BasicUnusualOptions';
import BasicUnusualOptionsFeed from './components/Options/BasicUOFeed';
import AdvancedUnusualOptions from './components/Options/AdvancedUnusualOptions';
import NewsFeed from './components/News/NewsFeed';
import Notes from './components/Notes/Notes';
import NoteDetail from './components/Notes/NoteDetail';
import EditNote from './components/Notes/EditNote';
import 'react-quill/dist/quill.snow.css';
import TOS from "./components/TOS/TOS";
import './css/App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import * as ROUTES from './routes/routes';
import Splash from "./components/Splash/Splash";
// import StripeSubscribe from './components/Stripe/Subscribe';
import Profile from './components/Account/Profile';
import NewNote from './components/Notes/NewNote';
import { receiveUser, clearUser } from './reducers/authReducer';
import Loader from './components/Loader';
import { PersistGate } from 'redux-persist/integration/react';
import AdvancedUOFeed from './components/Options/AdvancedUOFeed';
import SDScreen from './components/StockDiscover/SDScreen';
import Prospects from './components/Prospects/Prospects';

const App = () => {

  useEffect(() => {
    ReactGa.initialize('UA-176664458-1')

    ReactGa.pageview(window.location.pathname + window.location.search)
  });

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
    url: "https://findmarketplays.herokuapp.com/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  //"https://findmarketplays.herokuapp.com/"

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {isLoading ? (
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

                  <Route exact path={ROUTES.PROSPECTS}>
                    <Prospects/>
                  </Route>

                  <Route exact path={ROUTES.SHARE_LINK}>
                    <Register/>
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
                    <Auth />
                  </Route>

                  <Route path={ROUTES.NEW_NOTE}>
                    <NewNote />
                  </Route>

                  <Route path={ROUTES.EDIT_NOTE}>
                    <EditNote />
                  </Route>

                  <Route path={ROUTES.NOTES}>
                    <Notes />
                  </Route>

                  <Route path={ROUTES.SD_SCREEN}>
                    <SDScreen />
                  </Route>

                  <Route path={ROUTES.NOTE_DETAIL}>
                    <NoteDetail />
                  </Route>

                  <Route path={ROUTES.BASIC_UNUSUAL_OPTIONS}>
                    <BasicUnusualOptions />
                  </Route>

                  <Route path={ROUTES.BASIC_UNUSUAL_OPTIONS_FEED}>
                    <BasicUnusualOptionsFeed />
                  </Route>

                  <Route path={ROUTES.ADVANCED_UNUSUAL_OPTIONS_FEED}>
                    <AdvancedUOFeed />
                  </Route>

                  <Route path={ROUTES.ADVANCED_UNUSUAL_OPTIONS}>
                    <AdvancedUnusualOptions />
                  </Route>

                  <Route path={ROUTES.NEWS_FEED}>
                    <NewsFeed />
                  </Route>

                  {/* <Route path={ROUTES.STRIPE_SUBSCRIBE}>
                    <StripeSubscribe />
                  </Route> */}

                  <Route exact path={ROUTES.TOS}>
                    <TOS />
                  </Route>

                  <Route exact path={ROUTES.SPLASH}>
                    <Splash />
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
        )}
      </PersistGate>
    </Provider>
  );
};

export default App;

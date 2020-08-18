import React, { Fragment } from 'react';
import 'firebase/auth';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

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
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import * as ROUTES from './routes/routes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  // componentDidMount() {
  //   this.listener = this.props.firebase.auth.onAuthStateChanged(
  //       authUser => {
  //           authUser
  //             ? this.setState({ authUser })
  //             : this.setState({ authUser: null });
  //         },
  //   );
  // }
  // componentWillUnmount() {
  //   this.listener();
  // }

  render() {
    return (
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
              <Route path={ROUTES.NOTES}>
                <Notes />
              </Route>
              <Route path={ROUTES.UNUSUAL_OPTIONS}>
                <UnusualOptions />
              </Route>
              <Route path={ROUTES.NEWS_FEED}>
                <NewsFeed />
              </Route>
              <Route path={ROUTES.ABOUT}>
                <About />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;

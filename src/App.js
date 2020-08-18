import React, { Fragment } from 'react';
import 'firebase/auth';
import {
  BrowserRouter as Router,
  Route,
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
import Login from './components/Auth/Login'
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
          <Navigation /> //Add Authenticated User Check
          <div className="app__wrapper">
          <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.REGISTER} component={Register} />
          <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
          <Route path={ROUTES.SINGLE_STOCK_RESEARCH} component={OneStock} />
          <Route path={ROUTES.DD} component={DD} />
          <Route path={ROUTES.NOTES} component={Notes} />
          <Route path={ROUTES.UNUSUAL_OPTIONS} component={UnusualOptions} />
          <Route path={ROUTES.NEWS_FEED} component={NewsFeed} />
          <Route path={ROUTES.ABOUT} component={About} />
          </div>
          <Footer />
        </Fragment>
      </Router>
    )
  }
}

export default App;

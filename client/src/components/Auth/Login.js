import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useHistory, withRouter, Link} from 'react-router-dom';
import * as ROUTES from '../../routes/routes';
import firebase from '../../firebase/firebase';
import { receiveUser } from '../../reducers/authReducer';
import LoginErrors from '../Errors/LoginErrors';
import Axios from "axios";
// import fetchCounter from '../../util/swipeLimit';
import { receiveUserInfo } from '../../actions/userInfo';
import { receiveFromSDScreen } from "../../actions/fromSDScreen";
import '../../css/Auth.css';

const Login = ({ isAuthed, receiveUserInfo, receiveFromSDScreen, fromSDScreen }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loginErrors, setErrors] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuthed) history.push('/sdScreen')
  }, [isAuthed, history]);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  
  const BackSDScreen = () => {
    if (fromSDScreen) {
      return (
        <Button className="login-buttons mt-2" variant="danger" onClick={() => {
          history.push('/sdScreen');
          receiveFromSDScreen();
        }}>
          Back to Stock Discover
        </Button>
        // <Link to="/sdScreen" onClick={() => {
        //   receiveFromSDScreen();
        // }}>
        //   Back to Stock Discover
        // </Link>

        // <Button className="mt-2" href={ROUTES.SD_SCREEN} variant="secondary">
        //   Back to SD
        // </Button>
      )
    } else {
      return null;
    }
  }

  const fetchCounter = (uid) => {
    const ref = firebase.database().ref(`users/${uid}`);

    let data = null;
    // if no data exists, create new data for user in DB
    // then, set it to state
    // if data exists, set it to state
    ref.once('value')
      .then(snapshot => {

        data = snapshot.val()
        if (!data) {

          data = {
            counter: 0,
            time: 0,
            share: false,
            shareTime: 0
          };
          ref.set(data);
        }
        receiveUserInfo(data);
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = credentials;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        let url = `/stockDiscover/${email}/login`
        Axios.post(url, {
          headers: { "Content-Type": "application/json" }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        fetchCounter(res.user.uid)
        dispatch(receiveUser(res.user));
      })
      .catch((error) => {
        // Handle Errors here.
        setErrors(error)
      });
  };
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <h1>Login to access the full platform.</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            {LoginErrors(loginErrors)}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={credentials.email}
                />
                <Form.Text className="text-muted">
                  We&apos;ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={credentials.password}
                />
              </Form.Group>

              <Button className="login-buttons" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>


        <Row>
          <Col>
            <BackSDScreen/>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button className="login-buttons mt-2" href={ROUTES.REGISTER} variant="secondary">
              New User? Register Here
            </Button>
          </Col>
        </Row>

        <Row>
          <Col  >
            <Button href={ROUTES.FORGOT_PASSWORD} variant="link">
              Forgot Password
            </Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  const { auth, fromSDScreen } = state;

  return {
    isAuthed: auth.isAuthed,
    fromSDScreen: fromSDScreen
  };
};

const mapDispatchToProps = (dispatch) => ({
  receiveUserInfo: (userInfo) => dispatch(receiveUserInfo(userInfo)),
  receiveFromSDScreen: () => dispatch(receiveFromSDScreen(false))
});
// export default connect(mapStateToProps)(withRouter(Login));
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

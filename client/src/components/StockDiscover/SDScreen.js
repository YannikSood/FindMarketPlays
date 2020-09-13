import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import { useHistory, Link } from 'react-router-dom';
import ScrollingWidget from '../Widgets/ScrollingWidget';
import { debounce } from '../../helpers/SearchHelper';
import SymbolErrors from '../Errors/SymbolErrors';
import { receiveTicker, receiveResults } from '../../actions/advancedSearch';
import Axios from "axios";
import SDFlow from './SDFlow';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { receiveUserLists } from '../../actions/stockDiscover';
import { receiveUserInfo } from '../../actions/userInfo';
// import { userInfo } from 'os';
import { current } from 'immer';
import firebase from "../../firebase/firebase";

// changed to send options as one object instead of an array to SDFlow because the return value of fetch is an object.
// can change back to array depending on what we want (just wrap the object in a bracket) and uncomment
// a few lines in SDFlow
const SDScreen = ({isAuthed, currentUser, receiveUserLists, userInfo, receiveUserInfo}) => {
    const [loader, setLoader] = useState(true);
    const [ticker, setTicker] = useState();
    const [index, setIndex] = useState();
    const [options, setOptions] = useState({});

    const history = useHistory();

    useEffect(() => {
        if (!isAuthed) {
            history.push("/login")
        } else {
            const fetchData = () => {
                // fetch ticker from DB
                const url1 = `/stockDiscover/${currentUser.email}/fetch`;
                Axios.get(url1, {
                  headers: { "Content-Type": "application/json" }
                })
                //res.data.message
                    .then(res => {
                        // save ticker and index to state
                        setTicker(res.data.message);
                        setIndex(res.data.index);

                        // fetch ticker info from iex
                        const url2 = `/getTicker/${res.data.message}`;
                        fetch(url2, {
                          headers: { "Content-Type": "application/json" },
                        })
                          .then((res) =>
                            res.json().then((json) => {
                              setOptions(json.message || {});
                              setLoader(false);
                            })
                          )
                          .catch((err) => console.log(err));
                    })
                    .catch(err => console.log(err))
            };
            debounce(fetchData());
        }
    }, []);

      const loading = () => {
        if (loader) {
          return (
            <Container>
              <Row>
                <Col>
                  <h1>Loading data. . .</h1>
                </Col>
              </Row>
            </Container>
          );
        }
      };

      const serverCall = (swipeUrl, email) => {
        Axios.post(swipeUrl, {
          headers: { "Content-Type": "application/json" },
        })
          .then((swipeRes) => {
            const url = `/stockDiscover/${email}/fetch`;

            // set to state, in case we ever need this data again
            receiveUserLists(swipeRes.data.message);

            // get ticker from mongodb
            Axios.get(url, {
              headers: { "Content-Type": "application/json" },
            })
              .then((res) => {
                setTicker(res.data.message);
                setIndex(res.data.index);
                const url2 = `/getTicker/${res.data.message}`;
                Axios.get(url2, {
                  // get ticker data from iex
                  headers: { "Content-Type": "application/json" },
                })
                  .then((res2) => {
                    setOptions(res2.data.message || {});
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      };

     const rightSwipe = () => {   
        const email = currentUser.email;
        const swipeUrl = `/stockDiscover/${email}/swipeRight/${index}`;
        let counter = userInfo.counter;
        let time = userInfo.time;

        // remember to update the counter in state and database
        
        // check if timer is up
        
        if (counter < 40 && time === 0) {
            counter += 1;
            time = 0;
            // swipe server call
            serverCall(swipeUrl, email);
                  
        } else if (counter >= 40 && time === 0) {
          let currentTime = Date.now();
          let nextTime = currentTime + 4 * 60 * 60 * 1000;

          time = nextTime;
        } else if (Date.now() >= time) {
          serverCall(swipeUrl, email);
          time = 0;
          counter = 1;
        } else if (time != 0) {
          return;
        } 

        // update state here
        let newUserInfo = {
            counter: counter, 
            id: userInfo.id,
            time: time
        }
        receiveUserInfo(newUserInfo);
        firebase.database().ref(`users/${currentUser.id}`).set(newUserInfo);
    };

    const leftSwipe = () => {
        const email = currentUser.email;
        const swipeUrl = `/stockDiscover/${email}/swipeLeft/${index}`;
        let counter = userInfo.counter;
        let time = userInfo.time;

        
        if (counter < 40 && time === 0) {
            counter += 1;
            time = 0;
            // swipe server call
            serverCall(swipeUrl, email);
                  
        } else if (counter >= 40 && time === 0) {
          let currentTime = Date.now();
          let nextTime = currentTime + 4 * 60 * 60 * 1000;

          time = nextTime;
        } else if (Date.now() >= time) {
          serverCall(swipeUrl, email);
          time = 0;
          counter = 1;
        } else if (time != 0) {
          return;
        } 

        let newUserInfo = {
            counter: counter,
            id: userInfo.id,
            time: time,
        };
           
        receiveUserInfo(newUserInfo);
        firebase.database().ref(`users/${currentUser.id}`).set(newUserInfo);
    };

    // const showErr = () => {
    //     if (!Object.values(options).length) {
    //         return SymbolErrors()
    //     }
    // }

    const showFlow = () => {
        if (ticker && Object.keys(options).length) {
            return (
                <Container>
                    <SDFlow value={options} />
                </Container>
            )
        }
    }


    // Handlers
    // const handleInputChange = (event) => {
    //     setTicker(event.target.value.toUpperCase());
    // }

    return (
        <Fragment>
            <ScrollingWidget className="scrolling"/>
            <Container>
                <Row className="widget__wrapper">
                    <Col md={7}>
                        <Form>
                            <h1>Stock Discover</h1>
                            {loading()}
                             {/* <h5>ENTER STOCK TICKER(S)</h5>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    value={ticker}
                                    onChange={handleInputChange}
                                    placeholder="GOOGL"
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                />
                            </InputGroup> */}
                        </Form>
                        {/* {showErr()} */}
                    </Col>
                </Row>
                <Row>
                    {showFlow()}
                    <TradingViewWidget
                        symbol={ticker}
                        theme={Themes.DARK}
                        locale="en"
                        autosize
                    />
                </Row>

                <Row>
                    <Col>
                    <Row>
                        <Button className="ml-2" onClick={() => leftSwipe()} variant="outline-light"> Swipe Left</Button>
                        <Button className="ml-2" onClick={() => rightSwipe()} variant="outline-light"> Swipe Right</Button>
                    </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Button>
                                <Link to="/prospects">My Prospects</Link>
                            </Button>
                        </Row>
                    </Col>
                </Row>


                {/* <Row>
                    <Button className="ml-2" onClick={()} variant="outline-light"> More Info Button</Button>
                </Row> */}
            </Container>
        </Fragment>
    );
};
    

    const mapStateToProps = (state) => {
        const { auth, advancedSearch, sort, userInfo } = state;
    
        return {
            isAuthed: auth.isAuthed,
            results: advancedSearch.results,
            sort: sort,
            currentUser: auth.currentUser,
            userInfo: userInfo
        }
    };
    
    const mapDispatchToProps = (dispatch) => ({
        sendTicker: (ticker) => dispatch(receiveTicker(ticker)),
        resetResults: () => dispatch(receiveResults({})),
        receiveUserLists: (userLists) => dispatch(receiveUserLists(userLists)),
        receiveUserInfo: userInfo => dispatch(receiveUserInfo(userInfo))
    })



export default connect(mapStateToProps, mapDispatchToProps)(SDScreen);
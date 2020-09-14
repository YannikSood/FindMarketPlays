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
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import firebase from "../../firebase/firebase";
import SwipeErrors from '../Errors/SwipeErrors';

// changed to send options as one object instead of an array to SDFlow because the return value of fetch is an object.
// can change back to array depending on what we want (just wrap the object in a bracket) and uncomment
// a few lines in SDFlow
const SDScreen = ({isAuthed, currentUser, receiveUserLists, userInfo, receiveUserInfo}) => {
    const [loader, setLoader] = useState(true);
    const [ticker, setTicker] = useState();
    const [index, setIndex] = useState();
    const [options, setOptions] = useState({});
    const [errors, setErrors] = useState(false);
    const [company, setCompany] = useState({});
    const [companyLogo, setCompanyLogo] = useState({});
    const waitTime = 4 * 60 * 60 * 1000;
    let limit = 40;
    
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
                    Axios.get(url2, {
                      headers: { "Content-Type": "application/json" },
                    })
                      .then((res) => {
                            setOptions(res.data.message || {});
                            const url3 = `/getCompany/${res.data.message.symbol}`;
                            fetch(url3, {
                            headers: { "Content-Type": "application/json" },
                            })
                            .then(res2 => {
                                    res2.json().then(json => {
                                        setCompany(json.message)
                                        const url4 = `/getLogo/${res.data.message.symbol}`

                                        fetch(url4, {
                                            headers: {
                                                "Content-Type": "application/json",
                                            }
                                        })
                                        .then(res3 => {
                                            res3.json().then(json => {
                                                setCompanyLogo(json.message || {});
                                                setLoader(false);
                                            })
                                        })
                                        .catch(err => console.log(err))
                                    })

                            })
                            .catch(err => console.log(err))
                    
                      })
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
                    const url3 = `/getCompany/${res.data.message}`;
                    Axios.get(url3, {
                        headers: { "Content-Type": "application/json" },
                    })
                    .then((res3) => {
                        setCompany(res3.data.message || {});
                        
                        const url4 = `/getLogo/${res.data.message.symbol}`;

                        fetch(url4, {
                          headers: {
                            "Content-Type": "application/json",
                          },
                        })
                          .then((res3) => {
                            res3.json().then((json) => {
                              setCompanyLogo(json.message || {});
                              setLoader(false);
                            });
                          })
                          .catch((err) => console.log(err));
                    })
                    .catch((err) => console.log(err));
                 
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
        let share = userInfo.share;
        let shareTime = userInfo.shareTime;

        
        // check if shareable link has been shared

        if (share && shareTime >= Date.now()) {
            serverCall(swipeUrl, email);
            counter = 0
            
        } else {
            // if not or if expired
            share = false;
            shareTime = 0;
            
            if (counter < limit && time === 0) {
                counter += 1;
                time = 0;
                // swipe server call
                serverCall(swipeUrl, email);
                
            } else if (counter >= limit && time === 0) {
                let currentTime = Date.now();
                let nextTime = currentTime + waitTime;
                // set error in state
                setErrors(true)
                time = nextTime;
                
            } else if (Date.now() >= time) {
                serverCall(swipeUrl, email);
                time = 0;
                counter = 1;
                setErrors(false);
                
            } else if (time != 0) {
                // set error in state
                setErrors(true);
                
                return;
            } 
        }
        
        
        // update state here
        let newUserInfo = {
            counter: counter, 
            time: time,
            share: share,
            shareTime: shareTime
        }
        
        receiveUserInfo(newUserInfo);
        firebase.database().ref(`users/${currentUser.id}`).set(newUserInfo);
    };

    const leftSwipe = () => {
        const email = currentUser.email;
        const swipeUrl = `/stockDiscover/${email}/swipeLeft/${index}`;
        let counter = userInfo.counter;
        let time = userInfo.time;
        let share = userInfo.share;
        let shareTime = userInfo.shareTime;

        // checks if shareable link has been shared
        if (share && shareTime >= Date.now()) {
            serverCall(swipeUrl, email)
            counter = 0;
        } else {
            // if not or if expired
            share = false;
            shareTime = 0;
            if (counter < limit && time === 0) {
              counter += 1;
              time = 0;
              // swipe server call
              serverCall(swipeUrl, email);
            } else if (counter >= limit && time === 0) {
              let currentTime = Date.now();
              let nextTime = currentTime + waitTime;

              time = nextTime;
              setErrors(true);
            } else if (Date.now() >= time) {
              serverCall(swipeUrl, email);
              time = 0;
              counter = 1;
              setErrors(false);
            } else if (time != 0) {
              setErrors(true);

              return;
            }
        } 

        let newUserInfo = {
            counter: counter,
            time: time,
            share: share,
            shareTime: shareTime
        };
           
        receiveUserInfo(newUserInfo);
        firebase.database().ref(`users/${currentUser.id}`).set(newUserInfo);
    };

    const showErr = () => {
        if (errors) {
            return SwipeErrors()
        }
    }

    const showFlow = () => {
        if (ticker && Object.keys(options).length) {
            return (
                <Container>
                    <SDFlow value={options} companyInfo={company} logo={companyLogo}/>
                </Container>
            )
        }
    }

    return (
        <Fragment>
            {/* <ScrollingWidget className="scrolling"/> */}
            <Container>
                {/* <Row className="widget__wrapper"> */}
                    <Col md={6}>
                            <h1>Stock Discover</h1>
                    </Col>

                    {loading()}
                {/* </Row> */}
                <Row>
                    <Col className="widget__col">
           
                        {showFlow()}

                    </Col>

                    <Col className="widget__col">
                        <TradingViewWidget
                            symbol={ticker}
                            theme={Themes.DARK}
                            locale="en"
                            autosize
                        />
                    </Col>
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
                <Row>
                  {showErr()}
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
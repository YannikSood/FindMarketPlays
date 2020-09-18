import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useHistory, Link } from 'react-router-dom';
import { debounce } from '../../helpers/SearchHelper';
import { receiveTicker, receiveResults } from '../../actions/advancedSearch';
import Axios from "axios";
import SDFlow from './SDFlow';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { receiveUserLists } from '../../actions/stockDiscover';
import { receiveUserInfo } from '../../actions/userInfo';
import firebase from "../../firebase/firebase";
import SwipeErrors from '../Errors/SwipeErrors';
import GuestSwipeErrors from '../Errors/GuestSwipeErrors';
import { receiveGuestStock } from '../../actions/guestStock';
import { receiveFromSDScreen } from '../../actions/fromSDScreen'
import '../../css/SDScreen.css';

//Unused
// import { userInfo } from 'os';
// import { current } from 'immer';
// import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'
// import SymbolErrors from '../Errors/SymbolErrors';
// import ScrollingWidget from '../Widgets/ScrollingWidget';
// import InputGroup from "react-bootstrap/InputGroup";
// import Form from 'react-bootstrap/Form';

const SDScreen = ({
  isAuthed, 
  currentUser, 
  receiveUserLists, 
  userInfo, 
  receiveUserInfo, 
  receiveGuestStock,
  receiveFromSDScreen,
  guestStock
}) => {
    const [loader, setLoader] = useState(true);
    const [ticker, setTicker] = useState();
    const [index, setIndex] = useState();
    const [options, setOptions] = useState({});
    const [errors, setErrors] = useState(false);
    const [guestErrors, setGuestErrors] = useState(false);
    const [company, setCompany] = useState({});
    const [companyLogo, setCompanyLogo] = useState({});
    const [inProgress, setProgress] = useState(false);
    const [guest, setGuest] = useState();
    const waitTime = 3 * 60 * 60 * 1000;
    let limit = 40;
    
    const history = useHistory();

    useEffect(() => {
        if (!isAuthed) {

            let storage = window.localStorage;
            let guestInfo = {
              counter: 0,
              time: 0,
            };

            if (!storage.getItem("guestInfo")) {
              storage.setItem("guestInfo", JSON.stringify(guestInfo));
            } else {
              guestInfo = JSON.parse(storage.getItem("guestInfo"));
              setGuest(guestInfo);
            }
            
            guestServerCall('/stockDiscover/guest/fetch');

        } else {
            setProgress(true);
            const fetchData = () => {
                // fetch ticker from DB
                const url1 = `/stockDiscover/${currentUser.email}/fetch`;
                Axios.get(url1, {
                  headers: { "Content-Type": "application/json" }
                })
                //res.data.message
                .then(res1 => {
                    // save ticker and index to state
                    setTicker(res1.data.message);
                    setIndex(res1.data.index);

                    // fetch ticker info from iex
                    const url2 = `/getTicker/${res1.data.message}`;
                    Axios.get(url2, {
                      headers: { "Content-Type": "application/json" },
                    })
                      .then((res2) => {
                            const companyInfo = res2.data.message;
                            setOptions(companyInfo || {});
                            const url3 = `/getCompany/${res1.data.message}`;
                            fetch(url3, {
                            headers: { "Content-Type": "application/json" },
                            })
                            .then(res3 => {
                                    res3.json().then(json => {
                                        setCompany(json.message)
                                        const url4 = `/getLogo/${res1.data.message}`

                                        fetch(url4, {
                                            headers: {
                                                "Content-Type": "application/json",
                                            }
                                        })
                                        .then(res4 => {
                                            res4.json().then(json => {
                                                setCompanyLogo(json.message || {});
                                                setLoader(false);
                                                setProgress(false);
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

    const handleClick = () => {
      setOptions({...options, index: index});
      receiveFromSDScreen(true);
      receiveGuestStock(options);
    }

    // render swipe buttons only after data is completely fetched
    const allowSwipes = () => {
      if (!inProgress) {

        if (isAuthed) {
          return (
            <Row className="mt-2 d-flex justify-content-center">
              <Button
                className="ml-2"
                onClick={() => leftSwipe()}
                variant="danger"
              >
                {" "}
                Pass 
              </Button>
              
              <Button
                className="ml-2 mr-1"
                onClick={() => rightSwipe()}
                variant="success"
              >
                {" "}
                Add
              </Button>
            </Row>
  
          );
        } else {
          return (
            <Container>
              <Row className="mt-2 d-flex justify-content-center">
                <Button
                  className="ml-2 mr-1"
                  onClick={() => guestSwipe()}
                  variant="success"
                >
                  {" "}
                  Next
                </Button>
              </Row>
              <Row className="mt-2 d-flex justify-content-center">
                <h5 className="tag-line">Log in to save stocks to your watchlist!</h5>
              </Row>
            </Container>
          );
        }
      }
    }

      const loading = () => {
        if (loader) {
          return (
            <Container>
              <Row>
                <Col>
                  <h5>Loading data. . .</h5>
                </Col>
              </Row>
            </Container>
          );
        }
      };

      const guestServerCall = (swipeurl) => {
        // three of the four axios requests are in this method
        const call = (ticker) => {
          const url2 = `/getTicker/${ticker}`;
            Axios.get(url2, {
              // get ticker data from iex
              headers: { "Content-Type": "application/json" },
            })
              .then((res2) => {
                setOptions(res2.data.message || {});
                const url3 = `/getCompany/${ticker}`;
                Axios.get(url3, {
                  headers: { "Content-Type": "application/json" },
                })
                  .then((res3) => {
                    setCompany(res3.data.message || {});

                    const url4 = `/getLogo/${ticker}`;

                    fetch(url4, {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    })
                      .then((res3) => {
                        res3.json().then((json) => {
                          setCompanyLogo(json.message || {});
                          setLoader(false);
                          setProgress(false);
                        });
                      })
                      .catch((err) => console.log(err));
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
        }


        if (Object.keys(guestStock).length) {
          call(guestStock.symbol);
          // skips the first axios request
          setTicker(guestStock.symbol);
        } else {
          // sends the first axios request before sending the next 3
            Axios.get(swipeurl, {
              headers: { "Content-Type": "application/json" },
            })
              .then((res) => {
                setTicker(res.data.message);
                setIndex(res.data.index);
                call(res.data.message)
              })
              .catch((err) => console.log(err));
          }
        }

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
                    const companyInfo = res2.data.message;
                    setOptions(companyInfo || {});
                    const url3 = `/getCompany/${res.data.message}`;
                    Axios.get(url3, {
                        headers: { "Content-Type": "application/json" },
                    })
                    .then((res3) => {
                        setCompany(res3.data.message || {});
                        
                        const url4 = `/getLogo/${res3.data.message.symbol}`;

                        fetch(url4, {
                          headers: {
                            "Content-Type": "application/json",
                          },
                        })
                          .then((res3) => {
                            res3.json().then((json) => {
                              setCompanyLogo(json.message || {});
                              setLoader(false);
                              setProgress(false);
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

      const guestSwipe = () => {
        let storage = window.localStorage;
        const swipeurl = `/stockDiscover/guest/fetch`
        setProgress(true);
        let counter = guest.counter;
        let time = guest.time;
        
        if (counter < limit && time === 0) {
          
          counter += 1;
          time = 0;
          // swipe server call
          guestServerCall(swipeurl)

        } else if (counter >= limit && time === 0) {
          
            let currentTime = Date.now();
            let nextTime = currentTime + waitTime;
            // set error in state
            setGuestErrors(true);
            time = nextTime;
        } else if (Date.now() >= time) {
          
            guestServerCall(swipeurl);
            time = 0;
            counter = 1;
            setGuestErrors(false);
        } else if (time !== 0) {
          
            // set error in state
            setGuestErrors(true);

            return;
        } 
        
        let updateInfo = {
          counter: counter,
          time: time
        }
        storage.setItem('guestInfo', JSON.stringify(updateInfo));
      }

     const rightSwipe = () => {   
        const email = currentUser.email;
        const swipeUrl = `/stockDiscover/${email}/swipeRight/${index}`;
        let counter = userInfo.counter;
        let time = userInfo.time;
        let share = userInfo.share;
        let shareTime = userInfo.shareTime;

        setProgress(true);  
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
                
            } else if (time !== 0) {
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

        setProgress(true);
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
            } else if (time !== 0) {
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

    const ShowGuestErr = () => {
      if (guestErrors) {
        return <GuestSwipeErrors />
      } else {
        return null;
      }
    }

    const showErr = () => {
        if (errors) {
            return <SwipeErrors />
        }
    }

    const showFlow = () => {
        if (ticker && Object.keys(options).length) {
            return (
                <Container >
                    <SDFlow value={options} companyInfo={company} logo={companyLogo}/>
                </Container>
            )
        }
    }

    const authedButtons = () => {
      if (!isAuthed) {
        return (
          <Row>
            <Col className="d-flex justify-content-center">
              <Button
                onClick={() => {
                  window.scrollTo(0, 0);
                  history.push("/prospects");
                  handleClick();
                }}
                className="mt-2 sdWatchLink"
              >
                My Watchlist
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                onClick={() => {
                  window.scrollTo(0, 0);
                  history.push("/stock");
                  handleClick();
                }}
                className="mt-2 sdWatchLink"
              >
                Research Stock
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                onClick={() => {
                  window.scrollTo(0, 0);
                  history.push("/basicOptionSearch");
                  handleClick();
                }}
                className="mt-2 sdWatchLink"
              >
                Unusual Options
              </Button>
            </Col>
          </Row>
        );
      } else {
        return (
          <Row>
            <Col>
              <Button
                onClick={() => {
                  window.scrollTo(0, 0);
                  history.push("/prospects");
                }}
                className="mt-2 sdWatchLink"
              >
                My Watchlist
              </Button>
            </Col>
          </Row>
        );
      }
    }

    return (
      <Fragment>
        <Container className="parent">
          <Row>
            <Col md={6}>
              <h2>Discover New Companies!</h2>
              <p>
                Our algorithm shows you different companies. You can add the
                company to your watchlist, or pass on the company.
              </p>
            </Col>  
          </Row>
        
          {authedButtons()}
          {loading()}

          <Row>
            <Col className="mt-0 mb-0">{showFlow()}</Col>
          </Row>
          <Row>
            <Col>{allowSwipes()}</Col>
          </Row>
          <Row>{showErr()}</Row>
          <Row>
            {" "}
            <ShowGuestErr />{" "}
          </Row>
          {/* <Row> <GuestSwipeErrors /> </Row> */}
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
            userInfo: userInfo,
            guestStock: state.guestStock
        }
    };
    
    const mapDispatchToProps = (dispatch) => ({
        sendTicker: (ticker) => dispatch(receiveTicker(ticker)),
        resetResults: () => dispatch(receiveResults({})),
        receiveUserLists: (userLists) => dispatch(receiveUserLists(userLists)),
        receiveUserInfo: userInfo => dispatch(receiveUserInfo(userInfo)),
        receiveGuestStock: guestStock => dispatch(receiveGuestStock(guestStock)),
        receiveFromSDScreen: (flag) => dispatch(receiveFromSDScreen(flag))
    })



export default connect(mapStateToProps, mapDispatchToProps)(SDScreen);
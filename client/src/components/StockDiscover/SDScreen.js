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
import { userInfo } from 'os';
import { current } from 'immer';

// changed to send options as one object instead of an array to SDFlow because the return value of fetch is an object.
// can change back to array depending on what we want (just wrap the object in a bracket) and uncomment
// a few lines in SDFlow
const SDScreen = ({isAuthed, currentUser, receiveUserLists}) => {
    const [searchedValue, setSearchedValue] = useState();
    const [nextTicker, setNextTicker] = useState(' ');
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
                            })
                          )
                          .catch((err) => console.log(err));
                    })
                    .catch(err => console.log(err))
            };
            debounce(fetchData());
        }
    }, []);


     const rightSwipe = () => {   
        const email = currentUser.email;
        const swipeUrl = `/stockDiscover/${email}/swipeRight/${index}`;

        // swipe server call
        Axios.post(swipeUrl, {
          headers: { "Content-Type": "application/json" }
        })
            .then(swipeRes => {
                const url = `/stockDiscover/${email}/fetch`;
                receiveUserLists(swipeRes.data.message);
                // get ticker from mongodb
                Axios.get(url, {
                headers: { "Content-Type": "application/json" }
                })
                    .then(res => {
                            setTicker(res.data.message);
                            setIndex(res.data.index);
                            const url2 = `/getTicker/${res.data.message}`;
                            Axios.get(url2, {
                                // get ticker data from iex
                                headers: { "Content-Type": "application/json" }
                            })
                                .then(res2 => {
                                    setOptions(res2.data.message || {})
                                })
                                .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))  
                })
                .catch(err => console.log(err))          
    };

    const leftSwipe = () => {
        const email = currentUser.email;
        const swipeUrl = `/stockDiscover/${email}/swipeLeft/${index}`;

        // swipe server call
        Axios.post(swipeUrl, {
          headers: { "Content-Type": "application/json" }
        })
            .then(swipeRes => {
                const url = `/stockDiscover/${email}/fetch`;
                Axios.get(url, {
                // get the random ticker index from DB
                headers: { "Content-Type": "application/json" },
                })
                .then((res) => {
                    setTicker(res.data.message);
                    setIndex(res.data.index);
                    const url2 = `/getTicker/${res.data.message}`;
                    Axios.get(url2, {
                    // get ticker info from iex
                    headers: { "Content-Type": "application/json" },
                    })
                    .then((res2) => {
                        setOptions(res2.data.message || {});
                    })
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));     
            })
            .catch(err => console.log(err));
        
           
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
        const { auth, advancedSearch, sort, currentUser } = state;
    
        return {
            isAuthed: auth.isAuthed,
            results: advancedSearch.results,
            sort: sort,
            currentUser: auth.currentUser
        }
    };
    
    const mapDispatchToProps = (dispatch) => ({
        sendTicker: (ticker) => dispatch(receiveTicker(ticker)),
        resetResults: () => dispatch(receiveResults({})),
        receiveUserLists: (userLists) => dispatch(receiveUserLists(userLists))
    })



export default connect(mapStateToProps, mapDispatchToProps)(SDScreen);
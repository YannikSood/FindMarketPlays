import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import ScrollingWidget from '../Widgets/ScrollingWidget';
import { debounce } from '../../helpers/SearchHelper';
import SymbolErrors from '../Errors/SymbolErrors';
import { receiveTicker, receiveResults } from '../../actions/advancedSearch';
import Axios from "axios";
import SDFlow from './SDFlow';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { userInfo } from 'os';
import { current } from 'immer';

// changed to send options as one object instead of an array to SDFlow because the return value of fetch is an object.
// can change back to array depending on what we want (just wrap the object in a bracket) and uncomment
// a few lines in SDFlow
const SDScreen = ({isAuthed, currentUser}) => {
    const [searchedValue, setSearchedValue] = useState('AMZN');
    const [nextTicker, setNextTicker] = useState(' ');
    const [options, setOptions] = useState({});
    

    const history = useHistory();

    // const search = () => {
    //     const url = `/getTicker/${searchedValue}`;
    //     Axios.get(url, {
    //         headers: { "Content-Type": "application/json" }
    //     })
    //         .then(res => setOptions(res.data))
    //         .catch(err => console.log(err))
    // }

    useEffect(() => {
        if (!isAuthed) {
            history.push("/login")
        } else {
            const fetchData = () => {
                const url = `/getTicker/${searchedValue}`;
                fetch(url, { headers: { Accept: 'application/json' } })
                    .then(res => res.json()
                        .then((json) => {
                            setOptions(json.message || {});
                        }))
                    .catch(err => console.log(err));
            };
            debounce(fetchData());
        }
    }, [searchedValue]);


     const rightSwipe = () => {
        
        // get the random ticker index from DB
        const email = currentUser.email;
        const url = `/stockDiscover/${email}/fetch`;
        console.log(url);//This gets Logged

        Axios.get(url, {
            // get ticker from mongodb
          headers: { "Content-Type": "application/json" }
        })
            .then(res => {
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
    };

    const leftSwipe = () => {
        
        const email = currentUser.email;
        const url = `/stockDiscover/${email}/fetch`;
        // const swipeUrl = `/stockDiscover/${email}/left/${res.data.index}`;
        
        
        Axios.get(url, {
            // get the random ticker index from DB
          headers: { "Content-Type": "application/json" }
        })
            .then(res => {
                const url2 = `/getTicker/${res.data.message}`;
                Axios.get(url2, {
                    // get ticker info from iex
                  headers: { "Content-Type": "application/json" }
                })
                    .then(res2 => {
                        setOptions(res2.data.message || {});
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))        
    };

    const showErr = () => {
        if (!Object.values(options).length) {
            return SymbolErrors()
        }
    }

    const showFlow = () => {
        if (searchedValue && Object.keys(options).length) {
            return (
                <Container>
                    <SDFlow value={options} />
                </Container>
            )
        }
    }


    // Handlers
    const handleInputChange = (event) => {
        setSearchedValue(event.target.value.toUpperCase());
    }

    return (
        <Fragment>
            <ScrollingWidget className="scrolling"/>
            <Container>
                <Row className="widget__wrapper">
                    <Col md={7}>
                        <Form>
                            <h1>Stock Discover</h1>
                             <h5>ENTER STOCK TICKER(S)</h5>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    value={searchedValue}
                                    onChange={handleInputChange}
                                    placeholder="GOOGL"
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                />
                            </InputGroup>
                        </Form>
                        {showErr()}
                    </Col>
                </Row>
                <Row>
                    {showFlow()}
                    <TradingViewWidget
                        symbol={searchedValue}
                        theme={Themes.DARK}
                        locale="en"
                        autosize
                    />
                </Row>

                <Row>
                    <Button className="ml-2" onClick={() => rightSwipe()} variant="outline-light"> Swipe Right Button</Button>
                </Row>

                <Row>
                    <Button className="ml-2" onClick={() => leftSwipe()} variant="outline-light"> Swipe Left Button</Button>
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
        resetResults: () => dispatch(receiveResults({}))
    })



export default connect(mapStateToProps, mapDispatchToProps)(SDScreen);
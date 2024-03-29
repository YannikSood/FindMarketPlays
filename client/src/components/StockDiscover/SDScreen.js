import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import ScrollingWidget from '../Widgets/ScrollingWidget';
import { debounce } from '../../helpers/SearchHelper';
import SymbolErrors from '../Errors/SymbolErrors';
import { receiveTicker, receiveResults } from '../../actions/advancedSearch';
import Axios from "axios";
import SDFlow from './SDFlow';


const SDScreen = () => {
    const [searchedValue, setSearchedValue] = useState('AMZN');
    const [options, setOptions] = useState([]);
    // const history = useHistory();

    // const search = () => {
    //     const url = `/getTicker/${searchedValue}`;
    //     Axios.get(url, {
    //         headers: { "Content-Type": "application/json" }
    //     })
    //         .then(res => setOptions(res.data))
    //         .catch(err => console.log(err))
    // }

    useEffect(() => {
        const fetchData = () => {
            const url = `/getTicker/${searchedValue}`;
            fetch(url, { headers: { Accept: 'application/json' } })
                .then(res => res.json()
                    .then((json) => {
                        setOptions(json.message || []);
                        // console.log(json.message);
                    }))
                .catch(err => console.log(err)); // eslint-disable-line
        };
        debounce(fetchData());
        // sendTicker(searchedValue);
        // resetResults();
    }, [searchedValue]);


    const showErr = () => {
        if (!Object.values(options).length) {
            return SymbolErrors()
        }
    }


    // Handlers
    const handleInputChange = (event) => {
        setSearchedValue(event.target.value.toUpperCase());
    }

    return (
        <Fragment>
            <ScrollingWidget />
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
                    {searchedValue && options.length > 0 && <SDFlow value={options} />}
                </Row>
            </Container>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    const { auth, advancedSearch, sort } = state;

    return {
        isAuthed: auth.isAuthed,
        results: advancedSearch.results,
        sort: sort
    };
};

const mapDispatchToProps = (dispatch) => ({
    sendTicker: (ticker) => dispatch(receiveTicker(ticker)),
    resetResults: () => dispatch(receiveResults({}))
})
export default connect(mapStateToProps, mapDispatchToProps)(SDScreen);
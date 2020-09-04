import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';
import ScrollingWidget from '../Widgets/ScrollingWidget';
import AdvancedOptionsFlow from './AdvancedOptionsFlow';
import { debounce } from '../../helpers/SearchHelper';
import SymbolErrors from '../Errors/SymbolErrors';
import { receiveTicker, receiveResults } from '../../actions/advancedSearch';
import Axios from "axios";

const AdvancedUnusualOptions = ({ isAuthed, resetResults }) => {
    // Hooks
    const [afterDate, setAfterDate] = useState();
    const [beforeDate, setBeforeDate] = useState();
    const [filterFlag, setFilter] = useState(false);
    const [searchedValue, setSearchedValue] = useState('AMZN,TSLA');
    const [options, setOptions] = useState([]);
    const history = useHistory();

    const search = () => {
        const url = `/betweenSearch/${beforeDate}/${afterDate}/${searchedValue}`;
        Axios.get(url, {
            headers: { "Content-Type": "application/json" }
        })
            .then(res => setOptions(res.data.message.option_activity))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const fetchData = () => {
            const url = `/optionsAPI/${searchedValue}`;
            fetch(url, { headers: { Accept: 'application/json' } })
                .then(res => res.json()
                    .then((json) => {
                        setOptions(json.message.option_activity || []);
                    }))
                .catch(err => console.log(err)); // eslint-disable-line
        };
        debounce(fetchData());
        // sendTicker(searchedValue);
        resetResults();
    }, [isAuthed, history, searchedValue, filterFlag, resetResults]);

    const displayFilter = () => {
        if (filterFlag) {
            return (
                <Container>
                    <Row>
                        <Col>
                            {filter()}
                        </Col>
                    </Row>

                </Container>
            );
        }
    }

    const SwitchButtons = () => {
        if (filterFlag) {
            return (
                <Button variant="secondary" onClick={() => setFilter(false)}>
                    Close
                </Button>
            )
        } else {
            return (
                <Button onClick={() => setFilter(true)}>
                    Filter
                </Button>
            )
        }
    }

    const showErr = () => {
        if (!Object.values(options).length) {
            return SymbolErrors()
        }
    }


    // Handlers
    const handleInputChange = (event) => {
        setSearchedValue(event.target.value.toUpperCase());
    };

    const filter = () => {
        return (
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col>
                        <InputGroup>
                            <Row>
                                <Col>
                                    <InputGroup.Append>From this date</InputGroup.Append>
                                    <Form.Control
                                        placeholder="YYYY-MM-DD"
                                        onChange={(e) => setBeforeDate(e.target.value)}
                                    ></Form.Control>
                                </Col>
                                <Col>
                                    <InputGroup.Append>To this date</InputGroup.Append>
                                    <Form.Control
                                        placeholder="YYYY-MM-DD"
                                        onChange={(e) => setAfterDate(e.target.value)}
                                    ></Form.Control>
                                </Col>
                                <Col>
                                    <Row>
                                        <Button onClick={() => search()}>Search</Button>
                                    </Row>
                                </Col>
                            </Row>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Fragment>
            <ScrollingWidget />
            <Container>
                <Row className="widget__wrapper">
                    <Col md={7}>
                        <Form>
                            <h1>Advanced Unusual Options Search</h1>
                             <h5>ENTER STOCK TICKER(S)</h5>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    value={searchedValue}
                                    onChange={handleInputChange}
                                    placeholder="GOOGL,QCOM"
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                />
                                <InputGroup.Append>
                                    <SwitchButtons />
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                        {showErr()}
                        {displayFilter()}
                    </Col>
                </Row>
                <Row>
                    {searchedValue && options.length > 0 && <AdvancedOptionsFlow value={options} />}
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
export default connect(mapStateToProps, mapDispatchToProps)(AdvancedUnusualOptions);
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
import BasicOptionsFlow from './BasicOptionsFlow';
import { debounce } from '../../helpers/SearchHelper';
import SymbolErrors from '../Errors/SymbolErrors';
// import AdvancedSearch from './AdvancedSearch';
// import Sort from './Sort';
// import { receiveTicker, receiveResults } from '../../actions/advancedSearch';
// import { oldestSort, greatestSort, leastSort } from '../../util/sort';

const BasicUnusualOptions = ({ isAuthed, sendTicker, resetResults, results, sort }) => {
  // Hooks
  // const [advancedSearch, setAdvancedSearch] = useState(false);
  const [searchedValue, setSearchedValue] = useState('AMZN');
  const [options, setOptions] = useState([]);
  const history = useHistory();

  // useEffect(() => {
  //   if (sort != "Recent") {
  //     sortBy();
  //   }
  // })
  
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
  }, [isAuthed, history, searchedValue]);

  // const sortBy = () => {
  //   if (sort === "Oldest") {
  //     oldestSort(results);
  //     setOptions(results);
  //   } else if (sort === "Greatest") {
  //     greatestSort(results);
  //     setOptions(results);
  //   } else if (sort === "Least") {
  //     leastSort(results);
  //     setOptions(results);
  //   }
  // }

  const showErr = () => {
    if (!Object.values(options).length) {
      return SymbolErrors()
    }
  }


  // Handlers
  const handleInputChange = (event) => {
    setSearchedValue(event.target.value.toUpperCase());
  };


  return (
    <Fragment>
      <ScrollingWidget />
      <Container>
        <Row className="widget__wrapper">
          <Col md={7}>
            <Form>
              <h1>Find Unusual Options Trades</h1>
              <h5>ENTER STOCK TICKER</h5>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={searchedValue}
                  onChange={handleInputChange}
                  placeholder="Enter Stock Ticker"
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
                {/* <InputGroup.Append>
                  <SwitchButtons/>
                </InputGroup.Append> */}
                {/* <InputGroup.Append>
                  <Sort />  
                </InputGroup.Append> */}
              </InputGroup>
            </Form>
            {showErr()}
            {/* {displayAdvancedSearch()} */}
          </Col>
        </Row>
        <Row>
          {searchedValue && options.length > 0 && <BasicOptionsFlow value={options} />}
        </Row>
      </Container>
    </Fragment>
  );
};

// const mapStateToProps = (state) => {
//   const { auth, advancedSearch, sort } = state;

//   return {
//     isAuthed: auth.isAuthed,
//     results: advancedSearch.results,
//     sort: sort
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   sendTicker: (ticker) => dispatch(receiveTicker(ticker)),
//   resetResults: () => dispatch(receiveResults({}))
// })
export default (BasicUnusualOptions);
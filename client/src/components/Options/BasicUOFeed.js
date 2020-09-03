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
import Axios from "axios";
// import AdvancedSearch from './AdvancedSearch';
// import Sort from './Sort';
// import { receiveTicker, receiveResults } from '../../actions/advancedSearch';
// import { oldestSort, greatestSort, leastSort } from '../../util/sort';

const BasicUnusualOptionsFeed = ({ isAuthed, sendTicker, resetResults, results, sort }) => {
  // Hooks
  // const [advancedSearch, setAdvancedSearch] = useState(false);
  const [options, setOptions] = useState([]);
  const[loader, setLoader] = useState(true);
  const history = useHistory();
  
  
  useEffect(() => {
      const fetchData = () => {
        const url = `/optionsAPI`;
        console.log(url);
        fetch(url, { headers: { Accept: 'application/json' } })
          .then(res => res.json()
            .then((json) => {
              setOptions(json.message.option_activity || []);
              setLoader(false);
            }))
          .catch(err => console.log(err));
      };
      debounce(fetchData());
  }, []);

  const loading = () => {
    if (loader) {
      return (
        <Container>
          <Row>
            <Col>
              <h1>
                Loading data. . . 
              </h1>
            </Col>
          </Row>
        </Container>
      )
    }
  }

  const refresh = () => {
    const url = `/optionsAPI`;
    console.log(url);
    Axios.get(url, {
        headers: { "Content-Type": "application/json" }
    })
        // .then(res => setOptions(res.data.message.option_activity))
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }   


  return (
    <Fragment>
      <ScrollingWidget />
      <Container>
        <Row className="widget__wrapper">
          <Col align="center" md={4}>
            <Button onClick={() => refresh()}>Refresh</Button>
            
            {/* {displayAdvancedSearch()} */}
          </Col>
        </Row>
        <Row>
          {loading()}
          {<BasicOptionsFlow value={options} />}
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
export default (BasicUnusualOptionsFeed);
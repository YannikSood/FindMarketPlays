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
  const history = useHistory();
  
  useEffect(() => {
      const fetchData = () => {
        const url = `/optionsAPI/BasicFeed`;
        fetch(url, { headers: { Accept: 'application/json' } })
          .then(res => res.json()
            .then((json) => {
              setOptions(json.message.option_activity || []);
            }))
          .catch(err => console.log(err));
      };
      debounce(fetchData());
  }, []);



  const refresh = () => {
    const url = `/optionsAPI/BasicFeed`;
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
          <Col md={7}>
            <Button onClick={() => refresh()}>Refresh</Button>
            
            {/* {displayAdvancedSearch()} */}
          </Col>
        </Row>
        <Row>
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
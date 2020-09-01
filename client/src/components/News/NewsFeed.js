import React, { useState, useEffect, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import ScrollingWidget from '../Widgets/ScrollingWidget';
import NewsFlow from './NewsFlow';
import * as ROUTES from '../../routes/routes';
import { debounce } from '../../helpers/SearchHelper';

const NewsFeed = ({ isAuthed }) => {
  // Hooks
  const [searchedValue, setSearchedValue] = useState('MSFT');
  const [options, setOptions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!isAuthed) {
      history.push(ROUTES.LOGIN);
    } else {
        const fetchData = () => {
          const url = `/newsAPI/${searchedValue}`;
          fetch(url, { headers: { Accept: 'application/json' } })
            .then(res => res.json()
              .then((json) => {
                setOptions(json.message || []);
              }))
            .catch(err => console.error(err)); // eslint-disable-line
        };
        debounce(fetchData());
    }
  }, [isAuthed, history, searchedValue]);

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
              <h1>Find News Articles</h1>
              <h5>ENTER STOCK TICKER</h5>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={searchedValue}
                  onChange={handleInputChange}
                  placeholder="Enter Stock Ticker"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          {searchedValue && options.length > 0 && <NewsFlow value={options} />}
        </Row>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    isAuthed: auth.isAuthed,
  };
};
export default connect(mapStateToProps)(NewsFeed);

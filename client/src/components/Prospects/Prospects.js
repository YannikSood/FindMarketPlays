import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import ProspectsFlow from './ProspectsFlow';
import Axios from "axios";
import { debounce } from "../../helpers/SearchHelper";

const Prospects = ({isAuthed, prospect, currentUser}) => {
    const history = useHistory();
    const [fetchedProspects, setFetchedProspects] = useState();

    useEffect(() => {
        if (!isAuthed) {
            history.push('/login')
        } else {
            const fetchData = () => { 
              let url = `/prospects/${currentUser.email}/`
              Axios.get(url, {
                headers: { "Content-Type": "application/json" }
              })
                .then((res) => {
                  setFetchedProspects(res.data.info);
                })
                .catch(err => console.log(err))
            }
            debounce(fetchData())
        }
    }, [])

    return (
      <Container>
        <Row className="d-flex justify-content-center mb-5">
          <h1>Prospects</h1>
        </Row>
        <Row>
          <Col>
            <Row>
              <h2>Data</h2>
            </Row>
            {console.log("no" + prospect)}
            <Row>Company: {prospect.name}</Row>
            <Row>Symbol: {prospect.symbol}</Row>
            <Row>
              <Link to="/advancedOptionSearch">Unusual Options</Link>
            </Row>
          </Col>
          <Col>
            <ProspectsFlow value={fetchedProspects} />
          </Col>
        </Row>
      </Container>
    );
}

const MSTP = state => ({
    isAuthed: state.auth.isAuthed,
    currentUser: state.auth.currentUser,
    prospect: state.prospect
})

const MDTP = (dispatch) => ({
  // receiveProspect: (prospect) => dispatch(receiveProspect(prospect)),
});

export default connect(MSTP, MDTP)(Prospects);
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import ProspectsFlow from './ProspectsFlow';
import Axios from "axios";
import { debounce } from "../../helpers/SearchHelper";
import { receiveProspectUO } from '../../actions/prospectUO';
import "../../css/Prospects.css";

const Prospects = ({isAuthed, prospect, currentUser, deletedProspect, receiveProspectUO}) => {
    const history = useHistory();
    const [fetchedProspects, setFetchedProspects] = useState();
    // const [deleted, setDelete] = useState(deletedProspect);

    const fetching = () => {
      if (!isAuthed) {
          history.push("/login");
        } else {
          const fetchData = () => {
            let url = `/prospects/${currentUser.email}/`;
            Axios.get(url, {
              headers: { "Content-Type": "application/json" },
            })
              .then((res) => {
                setFetchedProspects(res.data.info);
              })
              .catch((err) => console.log(err));
          };
          debounce(fetchData());
        }
    }

    useEffect(() => {
      // fetch data after a prospect is deleted
      fetching();     
    }, [deletedProspect])

    useEffect(() => {
      // fetch data after loading page
        fetching();
    }, [])

    const handleClick = (prospect) => {
      console.log(prospect)
      receiveProspectUO(prospect.symbol);
    }

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
            <Row>Company: {prospect.name}</Row>
            <Row>Symbol: {prospect.symbol}</Row>
            <Row>
              <Link
                onClick={() => handleClick(prospect)}
                to="/basicOptionSearch"
              >
                Unusual Options
              </Link>
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
    prospect: state.prospect,
    deletedProspect: state.deletedProspect
})

const MDTP = (dispatch) => ({
  receiveProspectUO: prospectUO => dispatch(receiveProspectUO(prospectUO))
  // receiveProspect: (prospect) => dispatch(receiveProspect(prospect)),
});

export default connect(MSTP, MDTP)(Prospects);
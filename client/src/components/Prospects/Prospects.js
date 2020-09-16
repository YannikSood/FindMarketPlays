import React, { Fragment, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import ProspectsFlow from './ProspectsFlow';
import Axios from "axios";
import { debounce } from "../../helpers/SearchHelper";
import { receiveProspectUO } from '../../actions/prospectUO';
import { receiveDeletingProspect } from '../../actions/deletingProspect';
import { receiveFromProspect } from '../../actions/fromProspect';
import { clearProspect } from '../../actions/prospect';
import Button from "react-bootstrap/Button";
import "../../css/Prospects.css";

const Prospects = ({receiveFromProspect, deletingProspect, isAuthed, prospect, currentUser, deletedProspect, receiveProspectUO, receiveDeletingProspect}) => {
    const history = useHistory();
    const [fetchedProspects, setFetchedProspects] = useState();
    const [deleting, setDeleting] = useState(false);

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
      receiveProspectUO(prospect.symbol);
      receiveFromProspect(true);
    }

    const displayData = () => {
      // WHILE DELETINGPROSPECT IS TRUE, RETURN A LOADER
      if (deletingProspect) {
        return (
          <Col className="d-flex justify-content-center" id="data-col">
            <Row className="p-2">
              <h4>Deleting...</h4>
            </Row>
          </Col>
        );
      } else {
          if (Object.keys(prospect).length) {
            return (
              <Col className="" id="data-col">
                <Row className="company-header p-2"><h4>{prospect.name} [${prospect.symbol}]</h4></Row>
                <Row className="p-2">
                  <Link
                    className="company-links prospectUO"
                    onClick={() => handleClick(prospect)}
                    to="/basicOptionSearch"
                  >
                    See Unusual Options Activity for ${prospect.symbol}
                  </Link>
                </Row>
                <Row className="p-2">
                  <Link
                    className="company-links prospectUO"
                    onClick={() => handleClick(prospect)}
                    to="/stock"
                  >
                    Lookup ${prospect.symbol} using our stock tool!
                  </Link>
                </Row>
              </Col>
            );
          } else {
            return (
              <Col className="d-flex justify-content-center" id="data-col">
                <Row className="p-2">
                  <h5>Select a company!</h5>
                </Row>

              </Col>
            );
          }
      }      
    }

    return (
      <Container>
      <Fragment>

        <Row className="d-flex justify-content-center mb-2">
          <h1>My Watchlist</h1>
        </Row>
        
        <Row className="d-flex justify-content-center">
        <Button className="mb-2">
            <Link className="sdWatchLink" to="/sdScreen">Discover Stocks</Link>
          </Button>
        </Row>

        <Row className="mb-3">

          <Col id="table-col">
            <ProspectsFlow value={fetchedProspects} />
          </Col>
         
        </Row>
        <Row>
          <Col id="table-wrap">
            {displayData()}
          </Col>
        </Row>
        
        </Fragment>
      </Container>
    );
}

const MSTP = state => ({
    isAuthed: state.auth.isAuthed,
    currentUser: state.auth.currentUser,
    prospect: state.prospect,
    deletedProspect: state.deletedProspect,
    deletingProspect: state.deletingProspect
})

const MDTP = (dispatch) => ({
  receiveProspectUO: prospectUO => dispatch(receiveProspectUO(prospectUO)),
  receiveDeletingProspect: deletingProspect => dispatch(receiveDeletingProspect(deletingProspect)),
  receiveFromProspect: flag => dispatch(receiveFromProspect(flag))
});

export default connect(MSTP, MDTP)(Prospects);
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, connect } from "react-redux";
import { Row, Col, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useHistory, withRouter } from "react-router-dom";
import * as ROUTES from "../../routes/routes";
import firebase from "../../firebase/firebase";
import Axios from "axios";


const StockDiscover = () => {
    useEffect(() => {
        const currentUser = firebase.auth().currentUser
        let listFlag = currentUser.listFlag;
        let url = `/stockDiscover/${currentUser.id}/${listFlag}`

        Axios.get(url, {
            headers: { "Content-Type": "application/json" }
        })
            .then(res => console.log(res)
            )
            .catch(err => console.log(err))

        

    }, [])

    return (<Container>
        hi
    </Container>)
}

export default StockDiscover;
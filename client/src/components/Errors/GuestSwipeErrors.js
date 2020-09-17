import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../../css/Errors.css";

function GuestSwipeErrors() {
    let storage = window.localStorage;
    let guestInfo = JSON.parse(storage.getItem('guestInfo'));
    let nextTime = guestInfo.time;
    let currentTime = Date.now();
    let remainingTimeMS = nextTime - currentTime;
    let remainingTimeHRS = Math.floor(remainingTimeMS / 1000 / 60 / 60);
    let remainingTimeMIN = Math.floor((remainingTimeMS / 1000 / 60) % 60);

    return (
        <Container>
            <Alert className="d-flex justify-content-center mt-3" variant="danger">
                You've hit your swipe limit! Please come back in {remainingTimeHRS} hours and{" "}
                {remainingTimeMIN} minutes.
            </Alert>
        </Container>
    );
}


export default GuestSwipeErrors;

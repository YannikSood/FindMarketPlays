import React from "react";
import { Alert } from "react-bootstrap";

function SwipeErrors() {
    return (
      <Alert className="mt-3" variant="danger">
        <p>You've hit your swipe limit! Please come back again in four hours!</p>
      </Alert>
    );
    }
export default SwipeErrors;

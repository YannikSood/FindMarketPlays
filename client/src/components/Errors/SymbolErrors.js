import React from 'react';
import { Alert } from 'react-bootstrap';

function SymbolErrors() {
    return (
        <Alert variant="danger" >
            <p>
                We didn't find unusual options for this ticker! There is either no activity, or the ticker is incorrect.
            </p>
        </Alert>
    )

}

export default SymbolErrors
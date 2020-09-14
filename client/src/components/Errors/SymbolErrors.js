import React from 'react';
import { Alert } from 'react-bootstrap';

function SymbolErrors() {
    return (
        <Alert variant="danger" >
            <p>
                Invalid symbol or no unusual options.
            </p>
        </Alert>
    )

}

export default SymbolErrors
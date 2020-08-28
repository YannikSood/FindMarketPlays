import React from 'react';
import { Alert } from 'react-bootstrap';

function ResetSuccess(resetSuccess) {
    if (resetSuccess) {
        return (
            <Alert variant="success" >
                <p>
                    Success.
                </p>
            </Alert>
        )
    }

}

export default ResetSuccess
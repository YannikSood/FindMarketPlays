import React from 'react';
import { Alert } from 'react-bootstrap';

function EmailSuccess(emailSuccess) {
    if (emailSuccess) {
        return (
            <Alert variant="success" >
                <p>
                    Success.
                </p>
            </Alert>
        )
    }

}

export default EmailSuccess
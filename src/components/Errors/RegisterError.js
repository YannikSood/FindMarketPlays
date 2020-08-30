import React from 'react';
import { Alert } from 'react-bootstrap';

function RegisterErrors(err) {
    if (err.message) {
        return (
            <Alert variant="danger" >
                <p>
                    {err.message}
                </p>
            </Alert>
        )
    }
}

export default RegisterErrors
import React from 'react';
import { Alert } from 'react-bootstrap';

function PasswordSuccess(passwordSuccess) {
    if (passwordSuccess) {
        return (
            <Alert variant="success" >
                <p>
                    Password reset email sent.
                </p>
            </Alert>
        )
    }

}

export default PasswordSuccess
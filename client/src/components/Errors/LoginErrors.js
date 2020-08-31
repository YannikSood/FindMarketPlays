import React from 'react';
import { Alert } from 'react-bootstrap';

function LoginErrors(loginErrors) {
    if (Object.keys(loginErrors).length) {
        return (
            <Alert variant="danger" >
                <p>
                    Oops, incorrect email or password.
                </p>
            </Alert>
        )
    }
}

export default LoginErrors
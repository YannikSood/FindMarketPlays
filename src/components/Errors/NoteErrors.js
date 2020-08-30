import React from 'react';
import { Alert } from 'react-bootstrap';

function NoteErrors(noteErrors) {
    if (Object.keys(noteErrors).length) {
        return (
            <Alert variant="danger" >
                <p>
                    Darn it! It looks like you've left your title or body empty.
              </p>
            </Alert>
        )

    }
}

export default NoteErrors
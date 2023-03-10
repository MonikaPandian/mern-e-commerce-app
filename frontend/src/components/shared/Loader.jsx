import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner animation="border" variant="secondary" role="status" style={{ width: '100px', height: '100px', display: "block", margin: "auto" }}>
            <span className='sr-only'>Loading...</span>
        </Spinner>
    )
}

export default Loader

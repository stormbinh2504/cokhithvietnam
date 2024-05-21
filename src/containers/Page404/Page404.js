import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';

function Page404(props) {
    return (
        <Fragment>
            <h1>404 Not Found</h1>
            <Link to="/">Go Home</Link>
        </Fragment>
        
    )
}

export default Page404

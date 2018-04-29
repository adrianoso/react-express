import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
        <div className="container">
            <Route
                {...rest}
                render={(props) => authed === true
                    ? <Component {...props} />
                    : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
            />
        </div>
    )
}

export default PrivateRoute;
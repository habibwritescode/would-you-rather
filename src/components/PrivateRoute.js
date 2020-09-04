import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


// A wrapper for <Route> that redirects to the signin
// screen if you're not yet authenticated.

function PrivateRoute({ children, user, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

function mapStateToProps({ authedUser }) {
    return {
        user: authedUser
    }
}

export default connect(mapStateToProps)(PrivateRoute)
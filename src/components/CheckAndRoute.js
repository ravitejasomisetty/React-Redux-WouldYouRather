import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

function CheckAndRoute(props) {
    const { component: Component, isAuthenticated, ...rest } = props

    return (
        <Route {...rest} render={(routeProps) => {
            return (
                isAuthenticated
                    ?
                    <Component {...routeProps} />
                    : <Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                    }} />
            );
        }} />
    )
}

function mapStateToProps({ authedUser }) {
    return {
        isAuthenticated: authedUser !== null
    }
}

export default connect(mapStateToProps, null, null, { pure: false })(CheckAndRoute)
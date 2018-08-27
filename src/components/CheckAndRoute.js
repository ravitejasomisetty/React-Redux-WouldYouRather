import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

function CheckAndRoute(props) {
    const { component: Component, authedUser, ...rest } = props

    return (
        <Route {...rest} render={(props) => {
            return (
                authedUser
                    ?
                    <Fragment>
                        <Component {...props} />
                    </Fragment>
                    : <Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                    }} />
            );
        }} />
    )
}

export default connect(({ authedUser }) => ({ authedUser }))(CheckAndRoute)
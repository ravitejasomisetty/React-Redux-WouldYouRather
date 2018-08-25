import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Poll from './Poll'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className='container'>
                        {this.props.loading ? null :
                            <div>
                                <Route path='/home' exact component={Home} />
                                <Route path='/questions/:question_id' exact component={Poll} />
                            </div>}
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Poll from './Poll'
import Nav from './Nav'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import CheckAndRoute from './CheckAndRoute';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className='container'>
                        <Nav />
                        <div>
                            <Route path='/' exact component={Login} />
                            <CheckAndRoute path='/home' exact component={Home} />
                            <CheckAndRoute path='/questions/:question_id' exact component={Poll} />
                            <CheckAndRoute path='/add' exact component={NewQuestion} />
                            <CheckAndRoute path='/leaderboard' exact component={LeaderBoard} />
                        </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default connect()(App)
import React, { Component, Fragment } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Poll from './Poll'
import Nav from './Nav'
import PageNotFound from './PageNotFound'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import CheckAndRoute from './CheckAndRoute';

class App extends Component {
    componentDidMount() {
        this.props.loadData()
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className='container'>
                        <Nav />
                        <Switch>
                            <Route path='/' exact component={Login} />
                            <CheckAndRoute path='/home' exact component={Home} />
                            <CheckAndRoute path='/questions/:question_id' exact component={Poll} />
                            <CheckAndRoute path='/add' exact component={NewQuestion} />
                            <CheckAndRoute path='/leaderboard' exact component={LeaderBoard} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadData: () => dispatch(handleInitialData())
    }
}

export default connect(null, mapDispatchToProps)(App)
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Poll from './Poll'
import Nav from './Nav'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';

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
                        {this.props.loading ? null :
                            <div>
                                <Route path='/home' exact component={Home} />
                                <Route path='/questions/:question_id' exact component={Poll} />
                                <Route path='/add' exact component={NewQuestion} />
                                <Route path='/leaderboard' exact component={LeaderBoard} />
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
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ListPolls from './ListPolls'

class Home extends Component {
    state = { displayAnsweredQuestions: false }

    toggleQuestions = (e) => {
        e.preventDefault()

        this.setState((prevState) => ({
            displayAnsweredQuestions: !prevState.displayAnsweredQuestions
        }))
    }

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        const { displayAnsweredQuestions } = this.state
        const{ unansweredPolls, answeredPolls, authedUser } = this.props
        const questionsToDisplay = !displayAnsweredQuestions ? unansweredPolls : answeredPolls
        
        return !authedUser ? null : (            
            <div>
                <button
                    onClick={this.toggleQuestions}>{`${displayAnsweredQuestions ? 'Unanswered' : 'Answered'} Questions`}</button>

                <br />
                <ListPolls questionsToDisplay={questionsToDisplay} />
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    const currentUser = users[authedUser]

    if (!currentUser)
        return { authedUser }

    const unansweredPolls = Object.values(questions).filter(q => !currentUser.answers[q.id])
    const answeredPolls = Object.keys(currentUser.answers).map((qid) => questions[qid])

    return {
        authedUser,
        unansweredPolls: Object.values(unansweredPolls)
            .sort((a, b) => b.timestamp - a.timestamp),
        answeredPolls: Object.values(answeredPolls)
            .sort((a, b) => b.timestamp - a.timestamp)
    }
}

export default connect(mapStateToProps)(Home);

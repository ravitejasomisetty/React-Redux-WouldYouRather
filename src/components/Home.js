import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListPolls from './ListPolls'

class Home extends Component {
    state = { displayAnsweredQuestions: false }

    toggleQuestions = (e) => {
        e.preventDefault()

        this.setState((prevState) => ({
            displayAnsweredQuestions: !prevState.displayAnsweredQuestions
        }))
    }

    render() {
        const { displayAnsweredQuestions } = this.state
        const { unansweredPolls, answeredPolls } = this.props
        const questionsToDisplay = !displayAnsweredQuestions ? unansweredPolls : answeredPolls

        return (
            <div>
                <h3 className='center'>{displayAnsweredQuestions ? 'Answered Questions' : 'Unanswered Questions'}</h3>
                <ListPolls questionsToDisplay={questionsToDisplay} />
                <br />
                <button className='btn'
                    onClick={this.toggleQuestions}>{`${displayAnsweredQuestions ? 'Unanswered' : 'Answered'} Questions`}</button>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    const currentUser = users[authedUser]

    if (!currentUser)
        return {}

    const unansweredPolls = Object.values(questions).filter(q => !currentUser.answers[q.id])
    const answeredPolls = Object.keys(currentUser.answers).map((qid) => questions[qid])

    return {
        unansweredPolls: Object.values(unansweredPolls)
            .sort((a, b) => b.timestamp - a.timestamp),
        answeredPolls: Object.values(answeredPolls)
            .sort((a, b) => b.timestamp - a.timestamp)
    }
}

export default connect(mapStateToProps)(Home);

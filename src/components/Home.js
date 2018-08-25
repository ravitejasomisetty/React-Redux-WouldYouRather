import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class Home extends Component {
    state = { displayAnswered: false }

    toggleQuestions = (e) => {
        e.preventDefault()

        this.setState((prevState) => ({displayAnswered: !prevState.displayAnswered}))
    }

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        const { displayAnswered } = this.state
        return (
            <div >
                <button
                    onClick={this.toggleQuestions}>{`${displayAnswered ? 'Unanswered' : 'Answered'} Questions`}</button>
            </div>
        );
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    const currentUser = users[authedUser]

    if (!currentUser)
        return { unansweredPollIds: '', answeredPollIds: '' }

    const unansweredPolls = Object.values(questions).filter(q => !currentUser.answers[q.id])
    const answeredPolls = Object.keys(currentUser.answers).map((qid) => questions[qid])

    return {
        unansweredPollIds: Object.values(unansweredPolls)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
        answeredPollIds: Object.values(answeredPolls)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id)
    }
}

export default connect(mapStateToProps)(Home);

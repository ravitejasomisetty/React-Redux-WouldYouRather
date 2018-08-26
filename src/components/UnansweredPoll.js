import React from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/shared'

class UnansweredPoll extends React.Component {

    handlePollAnswer = (e) => {
        const { authedUser, question } = this.props
        this.props.dispatch(handleSaveAnswer({ authedUser, qid: question.id, answer: e.currentTarget.value }))
    }

    render() {
        const { question } = this.props

        return (
            <div className='question-info'>
                <div>
                    <span> Would you rather </span>
                    <div className="radio">
                        <label>
                            <input type="radio" id='optionOne' name='poll' value='optionOne'
                                onChange={this.handlePollAnswer} />
                            {question.optionOne.text}
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" id='optionTwo' name='poll' value='optionTwo'
                                onChange={this.handlePollAnswer} />
                            {question.optionTwo.text}
                        </label>
                    </div>
                </div>
            </div>)
    }
}

export default connect()(UnansweredPoll)
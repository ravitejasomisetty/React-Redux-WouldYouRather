import React from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/shared'

class UnansweredPoll extends React.Component {

    handlePollAnswer = (e) => {
        const { authedUser, question } = this.props
        this.props.dispatch(handleSaveAnswer({ authedUser, qid: question.id, answer: e.currentTarget.value }))
    }

    render() {
        const { question, users } = this.props

        return (<div>
            <img
                src={users[question.author].avatarURL}
                alt={`avatar of ${question.author}`}
                height='25px'
                width='25px' />

            <form>
                <fieldset>
                    <legend>Would You Rather?</legend>
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
                </fieldset>
            </form>
        </div>)
    }
}

export default connect()(UnansweredPoll)
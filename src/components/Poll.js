import React from 'react'
import { connect } from 'react-redux'
import UnansweredPoll from './UnansweredPoll'

function Poll(props) {
    const { answered, authedUser, question, users } = props
    return (
        <div>
            {answered ? AnsweredPoll(props) : <UnansweredPoll authedUser={authedUser} question={question} users={users} />}
        </div>)
}

function AnsweredPoll(props) {
    const { authedUser, question, users } = props
    const votesForOptionOne = question.optionOne.votes.length
    const votesForOptionTwo = question.optionTwo.votes.length
    let percentOfVotesOptionOne = (votesForOptionOne / Object.keys(users).length) * 100
    let percentOfVotesOptionTwo = (votesForOptionTwo / Object.keys(users).length) * 100
    percentOfVotesOptionOne = Math.round(percentOfVotesOptionOne).toFixed(2)
    percentOfVotesOptionTwo = Math.round(percentOfVotesOptionTwo).toFixed(2)

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
                        <input type="radio" id='optionOne' name='poll' disabled='true'
                            checked={users[authedUser].answers[question.id] === 'optionOne'} />
                        {question.optionOne.text}, {votesForOptionOne} votes, {percentOfVotesOptionOne}%
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" id='optionTwo' name='poll' disabled='true'
                            checked={users[authedUser].answers[question.id] === 'optionTwo'} />
                        {question.optionTwo.text}, {votesForOptionTwo} votes, {percentOfVotesOptionTwo}%
                    </label>
                </div>
            </fieldset>
        </form>
    </div>)
}

export default connect(({ users, authedUser, questions }, props) => {
    const { question_id } = props.match.params
    const question = questions[question_id]

    return {
        answered: users[authedUser].answers[question.id],
        question,
        users,
        authedUser
    }
})(Poll)
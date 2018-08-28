import React from 'react'
import { connect } from 'react-redux'
import UnansweredPoll from './UnansweredPoll'
import PageNotFound from './PageNotFound'

function Poll(props) {
    const { answered, authedUser, question, users } = props
    return (
        question ? (<div className='question'>
            <img
                src={users[question.author].avatarURL}
                alt={`avatar of ${question.author}`}
                className='avatar' />
            {answered ?
                AnsweredPoll(props) :
                <UnansweredPoll authedUser={authedUser} question={question} users={users} />}
        </div>) : <PageNotFound />)
}

function AnsweredPoll(props) {
    const { authedUser, question, users } = props
    const votesForOptionOne = question.optionOne.votes.length
    const votesForOptionTwo = question.optionTwo.votes.length
    let percentOfVotesOptionOne = (votesForOptionOne / (votesForOptionOne + votesForOptionTwo)) * 100
    let percentOfVotesOptionTwo = (votesForOptionTwo / (votesForOptionOne + votesForOptionTwo)) * 100
    percentOfVotesOptionOne = Math.round(percentOfVotesOptionOne).toFixed(2)
    percentOfVotesOptionTwo = Math.round(percentOfVotesOptionTwo).toFixed(2)

    return (
        <div className='question-info'>
            <div>
                <span> Would you rather </span>
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
            </div>
        </div>)
}

export default connect(({ users, authedUser, questions }, props) => {
    const { question_id } = props.match.params
    const question = questions[question_id]

    if(!question){
        return null
    }

    return {
        answered: users[authedUser].answers[question.id],
        question,
        users,
        authedUser
    }
})(Poll)
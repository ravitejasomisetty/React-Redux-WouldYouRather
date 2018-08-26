import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function ListPolls(props) {
    const { users, questionsToDisplay } = props

    return <div>
        <ul className='dashboard-list'>
            {questionsToDisplay.map(q =>
                <li key={q.id}>
                    <Link to={`/questions/${q.id}`} className='question'>
                        <img src={users[q.author].avatarURL}
                            alt={`Avatar of ${q.author}`}
                            className='avatar' />
                        <div className='question-info'>
                            <div>
                                <span>Would you rather</span>
                                <p>{`${q.optionOne.text} or ${q.optionTwo.text} ?`}</p>
                            </div>
                                <p className='asked-by'>by {users[q.author].name}</p>
                        </div>
                    </Link>
                </li>)}
        </ul>
    </div>;
}

export default connect(({ users }, props) =>
    ({ users, questionsToDisplay: props.questionsToDisplay }))(ListPolls)
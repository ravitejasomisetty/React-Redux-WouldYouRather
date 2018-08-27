import React from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

export function Login(props) {
    const { users } = props
    return <div className='container'>
        <h3 className='center'>Identify yourself!</h3>
        <ul className='dashboard-list'>
            {Object.values(users).map(user =>
                <li key={user.id} value={user.id} className='question' onClick={handleSignIn.bind(this, user.id, props)}>
                    <img src={users[user.id].avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='avatar' />
                    <div className='question-info'>
                        <div>
                            <span>{user.name}</span>
                        </div>
                    </div>
                </li>)}
        </ul>
    </div>
}

const handleSignIn = (userId, props) => {
    const { dispatch, history, location } = props
    const redirectTo = location.state.from ? location.state.from.pathname : '/home'
    
    dispatch(setAuthedUser(userId))
    history.push(redirectTo)
}

export default connect(({ users }) => ({ users }))(Login)
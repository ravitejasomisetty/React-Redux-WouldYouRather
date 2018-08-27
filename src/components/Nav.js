import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetAuthedUser } from '../actions/authedUser';

export function Nav(props) {
    const { userName } = props
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/home' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li><NavLink to='/add' exact activeClassName='active'>
                    Post New
                    </NavLink>
                </li>
                <li><NavLink to='/leaderboard' exact activeClassName='active'>
                    Leader Board
                    </NavLink>
                </li>
                <li>{userName && <button onClick={handleSignOut.bind(this, props)}>
                    Sign out
                    </button>}
                </li>
            </ul>
            {userName && <p>{`You signed in as ${userName}`}</p>}
        </nav>
    )
}

const handleSignOut = ({ dispatch }) => {
    dispatch(resetAuthedUser())
}

function mapStateToProps({ users, authedUser }) {
    return {
        userName: users[authedUser] ? users[authedUser].name : ''
    }
}

export default connect(mapStateToProps)(Nav)
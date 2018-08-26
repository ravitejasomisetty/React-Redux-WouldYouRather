import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
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
            </ul>
        </nav>
    )
}
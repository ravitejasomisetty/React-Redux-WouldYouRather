import React from 'react'
import { connect } from 'react-redux'
import { UserCard } from 'react-ui-cards'

const ulStyle = {
    'listStyle': 'none'
}

const liStyle = {
    'display': 'inline-block'
}

function LeaderBoard(props) {
    let rank = 1
    return (<ul style={ulStyle}>
        {props.users.map(userData =>
            (<li key={userData.id} style={liStyle}>
                <UserCard avatar={userData.avatarURL} name={userData.name} stats={getStats(rank, userData)} />
            </li>))}
    </ul>)
}

const getStats = (rank, userData) => [
    {
        name: 'Rank',
        value: `#${rank++}`
    },
    {
        name: 'Questions',
        value: userData.questions.length
    },
    {
        name: 'Answers',
        value: Object.keys(userData.answers).length
    }
]

function mapStateToProps({ users }) {
    return {
        users: Object.values(users).sort((a, b) => sumOfQandA(b) - sumOfQandA(a))
    }

    function sumOfQandA(user) {
        return (user.questions.length + Object.keys(user.answers).length);
    }
}

export default connect(mapStateToProps)(LeaderBoard)
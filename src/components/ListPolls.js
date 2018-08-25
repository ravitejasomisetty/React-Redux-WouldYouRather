import React from 'react'
import { Link } from 'react-router-dom'

function ListPolls(props) {
    const { questionsToDisplay } = props

    return <div>
        <ul>
            {questionsToDisplay.map(q =>
                <Link to={`/questions/${q.id}`} key={q.id}>
                    <li>
                        <p>{`${q.optionOne.text} or ${q.optionTwo.text} by ${q.author}`}</p>
                        <hr />
                    </li>
                </Link>)}
        </ul>
    </div>;
}

export default ListPolls
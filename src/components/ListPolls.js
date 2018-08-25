import React from 'react'

function ListPolls(props) {
    const { questionsToDisplay } = props
    
    return <div>
        <ul>
            {questionsToDisplay.map(q =>
                <li key={q.id}>
                    <p>{`${q.optionOne.text} or ${q.optionTwo.text} by ${q.author}`}</p>
                </li>)}
        </ul>
    </div>;
}

export default ListPolls
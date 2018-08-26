import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([_getQuestions(), _getUsers()]).then(
            ([questions, users]) => {
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
            }
        )
    }
}

export function handleSaveAnswer({ authedUser, qid, answer }) {
    return (dispatch) => {
        return _saveQuestionAnswer({ authedUser, qid, answer })
            .then(() => {
                dispatch(handleInitialData())
            })
    }
}

export function handleAddQuestion(question){
    return (dispatch) => {
        return _saveQuestion(question)
        .then((q) =>{
            dispatch(handleInitialData())
        })
    }
}
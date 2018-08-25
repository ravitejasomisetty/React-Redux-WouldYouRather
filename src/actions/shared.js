import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { _getUsers, _getQuestions, _saveQuestionAnswer } from '../utils/_DATA'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([_getQuestions(), _getUsers()]).then(
            ([questions, users]) => {
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
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
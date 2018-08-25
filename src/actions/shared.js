import {receiveUsers} from './users'
import {receiveQuestions} from './questions'
import {setAuthedUser} from './authedUser'
import {_getUsers, _getQuestions} from '../utils/_DATA'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData(){
    return (dispatch) => {
        return Promise.all([_getQuestions(), _getUsers()]).then(
            ([questions, users]) => {
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
            }
        )
    }
}
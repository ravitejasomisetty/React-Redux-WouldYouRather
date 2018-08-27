export const SET_AUTHED_USER='SET_AUTHED_USER'

export function setAuthedUser(authedUser){
    return{
        type:SET_AUTHED_USER,
        authedUser
    }
}

export function resetAuthedUser(){
    return setAuthedUser(null)
}
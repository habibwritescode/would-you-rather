export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const LOG_OUT_USER = 'LOG_OUT_USER'

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function logOutUser() {
    return {
        type: LOG_OUT_USER,
        payload: null
    }
}
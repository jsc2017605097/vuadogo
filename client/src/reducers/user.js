
function userReducer(state = {}, action) {
    switch (action.type) {
        case 'CHECK_TOKEN_SUCCESSLY':
            return action.data
        case 'CHECK_TOKEN_ERROR':
            return {}
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}

export default userReducer
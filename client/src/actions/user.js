
const checkTokenSuccessly = (user) => {
    return {
        type: 'CHECK_TOKEN_SUCCESSLY',
        data: user
    }
}

const checkTokenError = {
    type: 'CHECK_TOKEN_ERROR'
}

const logout = {
    type: 'LOGOUT'
}
export default {
    checkTokenSuccessly,
    checkTokenError,
    logout
}
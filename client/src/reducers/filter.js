
function filter(state = { category: 'ALL', name: '' }, action) {
    switch (action.type) {
        case 'FILTER_CATEGORY':
            return { ...state, category: action.data }
        case 'FILTER_NAME':
            return { ...state, name: action.data }
        default:
            return state
    }
}

export default filter
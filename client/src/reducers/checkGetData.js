function getProduct(state = false, action) {
    switch (action.type) {
        case 'DONE':
            return true
        default:
            return state
    }
}

function getCategory(state = false, action) {
    switch (action.type) {
        case 'DONE':
            return true
        default:
            return state
    }
}

export default { getProduct, getCategory }
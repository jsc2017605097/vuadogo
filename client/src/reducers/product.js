
function productReducer(state = [], action) {
    switch (action.type) {
        case 'INIT_PRODUCT':
            return action.data
        case "ADD_PRODUCT_TO_PRODUCT":
            return [...state, action.data]
        case"DELETE_PRODUCT_AT_PRODUCT":
            return state.filter(product=>product._id !== action.data)
        default:
            return state
    }
}

const editProduct = (state = {}, action) => {
    switch (action.type) {
        case 'CHOOSE_PRODUCT':
            return action.data
        default:
            return state
    }
}

export default { productReducer, editProduct }
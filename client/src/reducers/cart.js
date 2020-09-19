function cartReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let newState = [...state]
            let check
            let index
            state.forEach((product, i) => {
                if (product._id === action.data._id) {
                    check = true
                    index = i
                    return 1;
                }
            })
            if (check) {
                newState[index].soluong += 1
            }
            else {
                newState.push({ ...action.data, soluong: 1 })
            }
            return newState
        case 'DELETE_CART':
            return state.filter(product => product._id !== action.data)
        case 'INCREASE':
            return state.map(product => {
                if (product._id === action.data._id) {
                    return { ...product, soluong: product.soluong + 1 }
                }
                return product
            })
        case 'PRE':
            return state.map(product => {
                if (product._id === action.data._id) {
                    if (product.soluong === 1) {
                        return product
                    }
                    return { ...product, soluong: product.soluong - 1 }
                }
                return product
            })
        default:
            return state
    }
}

function alertSuccess(state = false, action) {
    switch (action.type) {
        case 'ALERT_SUCCESS':
            return true
        default:
            return state
    }
}

export default { cartReducer, alertSuccess }
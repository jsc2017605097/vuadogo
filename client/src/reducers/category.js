function categoryReducer(state = [], action) {
    switch (action.type) {
        case 'INIT_CATEGORY':
            return action.data
        case 'ADD_CATEGORY':
            return state.concat(action.data)
        case 'ADD_PRODUCT':
            return state.map(categoryObject => {
                if (categoryObject._id === action.data.category) {
                    return {
                        ...categoryObject,
                        products: categoryObject.products.concat(action.data)
                    }
                }
                return categoryObject
            })
        case 'UPDATE_CATEGORY':
            return state.map(category => {
                if (category._id !== action.data._id) {
                    return category
                }
                return action.data
            })
        case 'DELETE_CATEGORY':
            console.log('delete :', action.data)
            return state.filter(category => {
                return category._id !== action.data._id
            })
        default:
            return state
    }
}

export default categoryReducer
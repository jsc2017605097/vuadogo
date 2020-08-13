
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
            return state.filter(category => {
                return category._id !== action.data._id
            })
        case 'DELETE_PRODUCT':
            return state.map(category => {
                if (category._id === action.data.category) {
                    const products = category.products.filter(product => {
                        return product._id !== action.data._id
                    })
                    return {
                        ...category,
                        products: products
                    }
                }
                return category
            })
        case 'UPDATE_PRODUCT':
            return state.map(category => {
                if (category._id === action.data.category) {
                    const products = category.products.map(product=>{
                        if(product._id === action.data._id){
                            return action.data
                        }
                        return product
                    })
                    return {
                        ...category,
                        products:products
                    }
                }
                return category
            })
        default:
            return state
    }
}

export default categoryReducer
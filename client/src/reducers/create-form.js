
function createForm(state = { showFormCategory: false, showFormProduct: false,editProduct:false }, action) {
    switch (action.type) {
        case 'SHOW_FORM_CATEGORY':
            return { ...state, showFormCategory: true }
        case 'HIDDEN_FORM_CATEGORY':
            return { ...state, showFormCategory: false }
        case 'SHOW_FORM_PRODUCT':
            return { ...state, showFormProduct: true }
        case 'HIDDEN_FORM_PRODUCT':
            return { ...state, showFormProduct: false }
            case 'SHOW_FORM_EDIT_PRODUCT':
            return { ...state, editProduct: true }
        case 'HIDDEN_FORM_EDIT_PRODUCT':
            return { ...state, editProduct: false }
        default:
            return state
    }
}

export default createForm
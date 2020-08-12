
function createForm(state = { showFormCategory: false, showFormProduct: false }, action) {
    switch (action.type) {
        case 'SHOW_FORM_CATEGORY':
            return { ...state, showFormCategory: true }
        case 'HIDDEN_FORM_CATEGORY':
            return { ...state, showFormCategory: false }
        case 'SHOW_FORM_PRODUCT':
            return { ...state, showFormProduct: true }
        case 'HIDDEN_FORM_PRODUCT':
            return { ...state, showFormProduct: false }
        default:
            return state
    }
}

export default createForm
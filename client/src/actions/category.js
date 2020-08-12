function initCategory(data) {
    return {
        type: 'INIT_CATEGORY',
        data: data
    }
}

function addCategory(data) {
    return {
        type: 'ADD_CATEGORY',
        data: data
    }
}
export default {
    initCategory,
    addCategory
}
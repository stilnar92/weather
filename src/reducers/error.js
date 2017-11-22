const initialState = {
    message: ''
}

export const error = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_ERROR':
            return {
                message: action.payload
            }
        case 'CLEAR_ERROR':
            return {
                message: ''
            }
        default:
            return state
    }
}
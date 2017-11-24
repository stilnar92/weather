const initialState = {
    message: '',
    type: ''
}

export const error = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_ERROR':
            return {
                type: 'ERROR',
                message: action.payload
            }
        case 'CLEAR_ERROR':
            return {
                ...state,
                message: ''
            }
        default:
            return state
    }
}
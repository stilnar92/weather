const initialState = {
    userLocation: '',
    status: 'IDLE',
    error: null
}

export const location = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_USER_LOCATION':
            return {
                userLocation: action.payload,
                status: 'FOUND',
                error: null,
            }
        case 'USER_CONFIRM_LOCATION':
            return {
                ...state,
                status: 'CONFIRM',
                error: null,
            }
        default:
            return state
    }
}

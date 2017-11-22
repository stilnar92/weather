const initialState = {
    data: {
        area: '',
    },
    status: 'IDLE',
    error: null
}

export const location = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_USER_LOCATION':
            return {
                data: action.payload,
                status: 'SUCCESS',
                error: null,
            }
        default:
            return state
    }
}
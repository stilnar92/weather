const initialState = {
    list: [],
    status: 'IDLE',
    error: null
}

export const weathers = (state = initialState, action) => {
    switch (action.type) {
        case 'WEATHERS_BEGIN':
            return {
                list:  state.list,
                status: 'RUNNING',
                error: null
            }
        case 'WEATHERS_SUCCESS':
            return {
                list: [...state.list, action.payload],
                status: 'SUCCESS',
                error: null
            }
        case 'WEATHERS_FAILURE':
            return {
                list: null,
                status: 'FAIL',
                error: action.payload,
            }
        default:
            return state
    }
}

const initialState = {
    list: [],
    status: 'IDLE',
    error: null
}

export const weathers = (state = initialState, action) => {
    switch (action.type) {
        case 'WEATHERS_CREATE_ITEM':
            return {
                list: [...state.list, action.payload],
                status: 'SUCCESS',
                error: null
            }
        default:
            return state
    }
}

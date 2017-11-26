const initialState = {
    list: [],
    status: 'IDLE',
    error: {}
}

export const weathers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WEATHER_BEGIN':
            return {
                list: state.list,
                status: 'RUNNING',
                error: []
            }
        case 'ADD_WEATHER_SUCCESS':
            console.log('add',action.payload)
            return {
                list: [action.payload, ...state.list],
                status: 'SUCCESS',
                error: []
            }
        case 'ADD_WEATHER_FAILURE':
            return {
                list: state.list,
                status: 'FAIL',
                error: action.payload,
            }
        case 'DELETE_WEATHER':
            return {
                list: state.list.filter((board) => board.area !== action.payload),
                status: 'SUCCESS',
                error: action.payload,
            }
        case 'DELETE_ALL':
            return {
                list: [],
                status: 'SUCCESS',
                error: [],
            }
        default:
            return state
    }
};


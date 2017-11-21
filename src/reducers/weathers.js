const initialState = {
    list: [],
    status: 'IDLE',
    error: null
}

export const weathers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WEATHER_BEGIN':
            return {
                list:  state.list,
                status: 'RUNNING',
                error: null
            }
        case 'ADD_WEATHER_SUCCESS':
            return {
                list: [...state.list, action.payload],
                status: 'SUCCESS',
                error: null
            }
        case 'ADD_WEATHER_FAILURE':
            return {
                list: null,
                status: 'FAIL',
                error: action.payload,
            }
        case 'DELETE_WEATHER':
            return {
                list: state.list.filter((item) => item.city !== action.payload),
                status: 'SUCCESS',
                error: action.payload,
            }
        case 'DELETE_ALL':
            return {
                list: [],
                status: 'SUCCESS',
                error: null,
            }
        default:
            return state
    }
}

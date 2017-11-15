const initialState = {
    data: {
        area: null,
        latitude: null,
        longitude: null
    },
    status: 'IDLE',
    error: null
}

export const location = (state = initialState, action) => {
    switch (action.type) {
        case 'WEATHER_LOCATION_SAVE':
            return {
                data: action.payload,
                status: 'SUCCESS',
                error: null,
            }
        default:
            return state
    }
}

export const weather = (state, action) => {
    switch (action.type) {
        case 'RECEIVE_WEATHER':
            return {
                type: RECEIVE_WEATHER,
                city: action.payload.city,
                weather: json,
                loading: false
            }
        default:
            return state
    }
}


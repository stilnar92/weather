import {WEATHER_BEGIN, WEATHER_END} from "../actions/index";

export const weather = (state = {}, action) => {
    switch (action.type) {
        case 'WEATHER_BEGIN':
            return {
                data: action.payload,
                status: 'RUNNING',
                error: null
            }
        case 'WEATHER_END':
            return {
                data: action.payload,
                status: 'SUCCESS',
                error: null
            }
        case 'WEATHER_FAILURE':
            return {
                data: null,
                status: 'FAIL',
                error: action.payload,
            }
        default:
            return state
    }
}


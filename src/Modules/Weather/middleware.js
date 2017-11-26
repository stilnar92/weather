import {currentWeatherMapped, predictsWeatherMapped} from './normalize'
export const openWeatherDataNormalize = store => next => action => {
    if (action.type === 'ADD_WEATHER_SUCCESS') {
        return next({
            type: 'ADD_WEATHER_SUCCESS',
            payload: {
                current: currentWeatherMapped(action.payload.list[0]),
                predicts: predictsWeatherMapped(action.payload.list),
                area: action.payload.city.name
            }
        })
    }
    return next(action);
}
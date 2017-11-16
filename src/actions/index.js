import fetch from 'isomorphic-fetch'
import {OPEN_WEATHER_API_KEY} from '../Constants'

export const WEATHER_BEGIN = 'WEATHER_BEGIN';
const requestWeather = () => {
    return {
        type: WEATHER_BEGIN,
    }
}

export const WEATHER_END = 'WEATHER_END';
function receiveWeather(json) {
    return {
        type: WEATHER_END,
        payload: json
    }
}

export function addWeatherCity(location) {

    return function (dispatch) {

        dispatch(requestWeather());
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`)
            .then(response => response.json())
            .then(json =>
                dispatch(receiveWeather(json))
            )
    }
}

export const WEATHER_LOCATION_SAVE = 'WEATHER_LOCATION_SAVE';
export function locationSave(location) {
    return {
        type: WEATHER_LOCATION_SAVE,
        payload: location
    }
}

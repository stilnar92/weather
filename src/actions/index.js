import {WeatherPageService} from  '../Service'
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

export function addWeather(location) {

    const p = new WeatherPageService().getWeathers(location);
    return function (dispatch) {
        dispatch(requestWeather());
        return p.then((json => dispatch(receiveWeather(json))))
    }
}

export const WEATHER_LOCATION_SAVE = 'WEATHER_LOCATION_SAVE';
export function locationSave(location) {
    return {
        type: WEATHER_LOCATION_SAVE,
        payload: location
    }
}


import fetch from 'isomorphic-fetch'

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

export function fetchWeather(city) {

    return function (dispatch) {

        dispatch(requestWeather());

        return fetch(`http://localhost:3004/weather`)
            .then(response => response.json())
            .then(json =>
                dispatch(receiveWeather(json))
            )
    }
}

export const WEATHERS_CREATE_ITEM = 'WEATHERS_CREATE_ITEM';

export function addWeatherCity(city) {

    return function (dispatch) {

        const p = new Promise((resolve) => resolve(dispatch(fetchWeather(city))));

        return p
            .then(weather =>
                dispatch({
                        type: WEATHERS_CREATE_ITEM,
                        payload: weather.payload
                    }
                )
            )
    }
}
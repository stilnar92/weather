import fetch from 'isomorphic-fetch'

export const REQUEST_WEATHER = 'REQUEST_WEATHER'
const requestWeather = (city) => {
    return {
        type: REQUEST_WEATHER,
        payload: {
            data: {},

        }
        city,
        loading: true
    }
}

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'
function receiveWeather(city, json) {
    return {
        type: RECEIVE_WEATHER,
        city,
        weather: json,
        loading: false
    }
}

export function fetchWeather(city) {

    return function (dispatch) {

        dispatch(requestWeather(city));

        return fetch(`http://localhost:3002/weather`)
            .then(response => response.json())
            .then(json =>
                dispatch(receiveWeather(city, json))
            )
    }
}
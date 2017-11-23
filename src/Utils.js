/*global google*/
import fetch from 'isomorphic-fetch'
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete'

export const getCityFromArea = (area) => {
    return Promise.resolve(geocodeByAddress(area).then(results => {
        let city = '';
        if (results.length > 1) {
            city = results[1];
        } else {
            city = results[0];
        }
        return city.address_components[0].long_name
    }))
}
export const findUserArea = () => {
    return new Promise((resolve) =>
        navigator.geolocation.getCurrentPosition(function (position) {
            let geocoder = new google.maps.Geocoder();
            let geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            geocoder.geocode({'latLng': geolocate}, (results, status) => {
                let result;
                if (status == google.maps.GeocoderStatus.OK) {

                    if (results.length > 1) {
                        result = results[1];
                    } else {
                        result = results[0];
                    }
                    resolve(result.address_components[0].long_name);
                }
            });
        })
    )
}

export const timeStampConvertTime = (timeStamp) => {
    let date = new Date(timeStamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
}

export const timeStampConvertToDate = (timeStamp) => {
    let date = new Date(timeStamp * 1000);
    return `${date.getDate()} ${date.getDay()}`
}

export const loadState = () => {
    try {
        const serilizedState = localStorage.getItem("state");
        if (serilizedState === null) {
            return undefined;
        }
        return JSON.parse(serilizedState);

    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serilizedState = JSON.stringify(state);
        localStorage.setItem('state', serilizedState);
    }
    catch (err) {

    }
}

export const getIconClass = (code) => {
    switch (code) {
        case '01d':
            return 'clear-sky-day';
        case '01n':
            return 'clear-sky-night';
        case '02d':
            return 'few-cloudy-day';
        case '02n':
            return 'few-cloudy-night';
        case '03n':
            return 'scattered-cloudy';
        case '03d':
            return 'scattered-cloudy';
        case '04n':
            return 'broken-cloudy';
        case '04d':
            return 'broken-cloudy';
        case '09n':
            return 'shower-rain';
        case '09d':
            return 'shower-rain';
        case '10d':
            return 'rain-day';
        case '10n':
            return 'rain-night';
        case '11d':
            return 'thunderstorm';
        case '11n':
            return 'thunderstorm';
        case '13d':
            return 'snow';
        case '13n':
            return 'snow';
        case '50d':
            return 'mist';
        case '50n':
            return 'mist';

    }
}

export const getFiveDaysForecast = (forecasts) => {
    const days = [0, 9, 17, 25, 31];
    return forecasts.filter((item, index) => {
        return index in days
    })
}

export const GET = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                if (json.cod && json.cod === "404") {
                    reject(json)
                }
                resolve(json)
            })
            .catch(error => reject(error))
    })
}


export function dispatchError(actionType, dispatch) {
    return (error) => {
        dispatch({
            type: `${actionType}_FAILURE`,
            payload: error,
            error: true
        });

        return Promise.reject(error);
    }
}


export function dispatchSuccess(actionType, dispatch) {
    return (payload) => {
        dispatch({
            type: `${actionType}_SUCCESS`,
            payload: payload
        });

        return payload;
    }
}

export function dispatchAsync(actionType, asyncCall, payload = {}) {

    return (dispatch) => {
        dispatch({type: `${actionType}_BEGIN`, payload});

        const p = asyncCall();
        if (p) {
            p.then(
                dispatchSuccess(actionType, dispatch),
                dispatchError(actionType, dispatch)
            )
        }

        return p;
    }
}


export function dispatchPromise(dispatch, actionType, payload = {}) {
    return Promise.resolve(dispatch({type: actionType, payload}))
}
export function dispatchAsyncBound(dispatch, actionType, asyncCall, payload = {}) {
    return dispatch(dispatchAsync(actionType, asyncCall, payload))

}

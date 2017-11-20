/*global google*/
import fetch from 'isomorphic-fetch'
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete'

export const getAddressFromCoords = (lat, lng) => {
    const geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(lat, lng);

    return new Promise((resolve, reject) => geocoder.geocode({'latLng': latlng}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
            let area = null;
            if (results[1]) {
                for (let i = 0; i < results[0].address_components.length; i++) {
                    for (let b = 0; b < results[0].address_components[i].types.length; b++) {
                        if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                            area = results[0].address_components[i];
                            break;
                        }
                    }
                }
                resolve(area);
            } else {
                alert("No results found");
            }
        } else {
            alert("Geocoder failed due to: " + status);
        }
    }));
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
    return new Promise((resolve) => {
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
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

export function dispatchAsyncBound(dispatch, actionType, asyncCall, payload = {}) {
    return dispatch(dispatchAsync(actionType, asyncCall, payload))

}

export const getLatLngFromAddress = (address) => {
    return geocodeByAddress(address).then(results => {
        return getLatLng(results[0])
    })
}
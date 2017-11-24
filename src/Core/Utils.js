/*global google*/
import fetch from 'isomorphic-fetch'
import {geocodeByAddress,} from 'react-places-autocomplete'

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
                if (status === google.maps.GeocoderStatus.OK) {

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

export const loadStateFromStorage = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);

    } catch (err) {
        return undefined;
    }
}

export const saveStateToStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err) {

    }
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

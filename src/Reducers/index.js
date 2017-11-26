import { combineReducers } from 'redux'
import {weathers} from '../Modules/Weather/Reducers/weathers'
import {location} from '../Modules/GeoLocation/Reducers/location'
import {error} from '../Core/Reducers/error'
import {modal} from '../Core/Reducers/modal'

const rootReducer = combineReducers({
    weathers,
    location,
    error,
    modal,
});

export default rootReducer;

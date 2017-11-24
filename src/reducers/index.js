import { combineReducers } from 'redux'
import {weathers} from './weathers'
import {location} from './location'
import {error} from './error'

const rootReducer = combineReducers({
    weathers,
    location,
    error
});

export default rootReducer;

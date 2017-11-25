import { combineReducers } from 'redux'
import {weathers} from './weathers'
import {location} from './location'

const weathersModule = combineReducers({
    weathers,
    location,
});

export default weathersModule;

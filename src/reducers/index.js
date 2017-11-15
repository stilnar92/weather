import { combineReducers } from 'redux'
import {weathers} from './weathers'
import {location} from './location'

const rootReducer = combineReducers({
    weathers,
    location
})

export default rootReducer

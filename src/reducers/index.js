import { combineReducers } from 'redux'
import {weather} from './weather'
import {weathers} from './weathers'

const rootReducer = combineReducers({
    weather,
    weathers
})

export default rootReducer

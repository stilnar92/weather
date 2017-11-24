import { combineReducers } from 'redux'
import weathersModule from '../Modules/Weathers/Reducers'
import {error} from '../Core/Reducers/error'

const rootReducer = combineReducers({
    weathersModule,
    error
});

export default rootReducer;

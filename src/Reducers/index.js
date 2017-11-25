import { combineReducers } from 'redux'
import weathersModule from '../Modules/Weather/Reducers'
import {error} from '../Core/Reducers/error'
import {modal} from '../Core/Reducers/modal'

const rootReducer = combineReducers({
    weathersModule,
    error,
    modal
});

export default rootReducer;

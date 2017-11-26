import {throttle} from 'lodash';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Reducers'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import  {saveStateToStorage, loadStateFromStorage} from './Core/Utils';
import {openWeatherDataNormalize} from './Modules/Weather/middleware';

export  const configureStore = () => {
    const initialStore = loadStateFromStorage();

    let store = createStore(
        rootReducer,
        initialStore,
        composeWithDevTools(
            applyMiddleware(thunk, openWeatherDataNormalize)
        )
    );

    store.subscribe(throttle(() => {
        saveStateToStorage(store.getState())
    }, 1000));
    return store;
}
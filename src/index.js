import {throttle} from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import './index.css';
import  {saveState, loadState} from './Utils';

const initialStore = loadState();

let store = createStore(
    rootReducer,
    initialStore,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();

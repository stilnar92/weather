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
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
let store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();

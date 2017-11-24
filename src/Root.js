import React from 'react';
import App from './App';
import {Provider} from 'react-redux'
export const Root = ({store}) => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>)
}
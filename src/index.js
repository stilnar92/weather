import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import  {configureStore} from './configureStore';
import  {Root} from './Root';

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
)

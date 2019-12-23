import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import { Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
// import logger from 'redux-logger'
import { reducer } from './store/reducer'

import { 
    localState, 
    saveState 
} from './store/localStorage'
import 'bootstrap/dist/css/bootstrap.min.css';

//loads state from local storage
const persistedState = localState();
const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(throttle (()=>{
    saveState(store.getState())
}, 1000));

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));

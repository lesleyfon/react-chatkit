import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import throttle from 'lodash/throttle';
import { reducer } from './store/reducer'
import { localState, saveState } from './store/localStorage'
import 'bootstrap/dist/css/bootstrap.min.css';

//loads state from local storage
const persistedState = localState();

const store = createStore(reducer, persistedState);
store.subscribe(throttle (()=>{
    saveState({
        message: store.getState()
    })
}, 1000));
ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));

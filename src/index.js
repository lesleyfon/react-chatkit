import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import { reducer } from './store/reducer'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));

import React from 'react';
import {Route } from 'react-router-dom';
import './App.css';
import ChatDashBoard from './views/ChatDashBoard';
import Login from './views/Login';
import './asserts/css/loading-btn.css'
import './asserts/css/loading.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       React Chat Kit
      </header>

      <Route 
        path='/login'
        exact
        render = {(props)=>{
          return <Login {...props}/>
        }}
        />
      <Route 
        path='/chat'
        exact
        render = {(props)=>{
          return <ChatDashBoard {...props}/>
        }}

      />
    </div>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router'
import Header from './components/Header/Header'
import './App.css';
import Login from './components/Login/Login';
import Popup from './components/PopupTest';

function App() {
  return (
    <div className="App">
        <Header />
        <Login />
    </div>
    
  );
}

export default App;

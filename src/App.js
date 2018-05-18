import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Me from './Me';


function App({user}) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome {user.firstName}</h1>
            </header>
            <p className="App-intro">
                Journey of React begins....
            </p>
            <Me user = {user}/>
        </div>
    );
}

export default App;

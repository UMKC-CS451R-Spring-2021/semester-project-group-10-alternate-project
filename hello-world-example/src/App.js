import logo from './logo.svg';
import React, { useState } from 'react';

import Login from './components/Login/Login.js';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js';

function App() {
    const [token, setToken] = useState();

    if (!token) {
        return <Login setToken = { setToken }
        />
    }

    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        h1 > Web App < /h1> <
        BrowserRouter >
        <
        Switch >
        <
        Route path = "/login" >
        <
        Login / >
        <
        /Route> <
        Route path = "/dashboard" >
        <
        Dashboard / >
        <
        /Route> < /
        Switch > <
        /BrowserRouter> <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. < /
        p > <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> < /
        header > <
        /div>
    );
}

export default App;
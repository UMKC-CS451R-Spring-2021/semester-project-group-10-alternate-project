import React, { useState } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import Search from './components/TeacherSearch/Search'
import ProfessorInfo from './components/ProfessorInfo/ProfessorInfo'

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {}

function App() {
    const [token, setToken] = useState();

    return ( <
        div className = "App" >
        <
        BrowserRouter >
        <
        div >
        <
        div className = "header" >
        <
        NavLink activeClassName = "active"
        to = "/login" > Login < /NavLink> <
        NavLink activeClassName = "active"
        to = "/dashboard" > Dashboard < /NavLink> <
        NavLink activeClassName = "active"
        to = "/search" > Search < /NavLink > <
        NavLink activeClassName = "active"
        to = "/ProfessorInfo" > ProfessorInfo < /NavLink>< /
        div >
        <
        div className = "content" >
        <
        Switch >
        <
        Route path = "/login"
        component = { Login }
        /> <
        Route path = "/dashboard"
        component = { Dashboard }
        /> <
        Route path = "/search"
        component = { Search }
        /> <
        Route path = "/ProfessorInfo"
        component = { ProfessorInfo }
        /> < /
        Switch > <
        /div> < /
        div > <
        /BrowserRouter> < /
        div >
    );
}
export default App;
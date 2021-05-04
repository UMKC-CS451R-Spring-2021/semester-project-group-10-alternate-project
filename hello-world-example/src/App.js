import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import Search from './components/TeacherSearch/Search'
import ProfessorInfo from './components/ProfessorInfo/ProfessorInfo'
import AddProfessorInfo from './components/ProfessorInfo/AddProfessorInfo'
import EditProfessor from './components/ProfessorInfo/EditProfessor'
import Semester from './components/Semester/semester'

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {}

function App() {
    const [token, setToken] = useState();

    // if(!token) {
    //     return <Login setToken={setToken} />
    // }
     
    return ( 
        <div className = "" >
            <BrowserRouter >
                    <div className = "header" >
                        <NavLink activeClassName = "active" to = "/login" > Login </NavLink> 
                        <NavLink activeClassName = "active" to = "/dashboard" > Dashboard </NavLink> 
                        <NavLink activeClassName = "active" to = "/search" > Search </NavLink> 
                        <NavLink activeClassName = "active" to = "/professorInfo" > ProfessorInfo </NavLink>
                        <NavLink activeClassName = "active" to = "/addProfessorInfo"> AddProfessor </NavLink>
                        <NavLink activeClassName = "active" to = "/editProfessorInfo"> EditProfessor</NavLink>
                        <NavLink activeClassName = "active" to = "/Semester"> Semester</NavLink>
                    </div>
                    <div className = "">
                        <Switch >
                            <Route path = "/login" component = { Login } /> 
                            <Route path = "/dashboard" component = { Dashboard } /> 
                            <Route path = "/search" component = { Search } /> 
                            <Route path = "/professorInfo" component = { ProfessorInfo } /> 
                            <Route path = "/addProfessorInfo" component = { AddProfessorInfo } />
                            <Route path = "/editProfessorInfo" component = { EditProfessor } />
                            <Route path = "/semester" component = { Semester } />
                        </Switch > 
                    </div> 
            </BrowserRouter> 
        </div>
    );
}
export default App;
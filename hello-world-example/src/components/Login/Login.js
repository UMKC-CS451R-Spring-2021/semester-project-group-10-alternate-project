import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css'
import http from "./http-common";

export default function Login(props) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // props.history.push("/dashboard");
        
        http.get("/teachers").then(console.log);
    }

    return ( 
    <div className = "bg" >
        <div className="banner">
            <h1> Banner </h1>
        </div>
        <div className = "login-wrapper" >
            <div className = "loginID" > < h1 > LoginID </h1> 
            </div>
            <form >
            <label >
                <input className="form-elemts" type = "text" onChange = { e => setUserName(e.target.value) } placeholder = "Username" / >
                </label> 
                <label >
                <p > <input className="form-elemts" type = "password" onChange = { e => setPassword(e.target.value) } placeholder = " ******" / > </p> </label > < p > 
                <div>
                <button className = "loginButton" type = "submit" onClick = { handleLogin } > LOGIN </button>  
                </div > 
                </p>
            </form>
        </div>
    </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
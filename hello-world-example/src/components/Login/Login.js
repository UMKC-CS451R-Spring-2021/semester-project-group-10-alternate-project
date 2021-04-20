import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import './Login.css'


export default function Login(props) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        props.history.push("/dashboard");
    }
    return ( 
    <div className = "bg" >
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
                <button className = "loginButton" type = "submit" onclick = { handleLogin } > LOGIN </button>  
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
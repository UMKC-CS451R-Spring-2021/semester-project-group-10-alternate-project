import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css'
import http from "./http-common";
import uicon from './uicon.png'

export default function Login(props) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // const handleLogin = (event) => {
    //     // props.history.push("/dashboard");
        
    //     http.get("/teachers").then(console.log);
    //     event.preventDefault();
    // }

    // handle click event of login button
    const handleLogin = () => {
        props.history.push('/dashboard');
    }
    return ( 
    <div className = "container" >
        {/* <div className = "top-bar"></div> */}
        <div className = "bg-img"></div>
        <div className = "login-wrapper" >
            <div className = "login-icon"><img src={ uicon} alt="icon" width="60" height="60"/></div>
            <div className = "loginID" > <h1> Login Here</h1></div>
                <form >
                    <label><input className="form-elemts" type = "text" onChange = { e => setUserName(e.target.value) } placeholder = "Username" /></label> 
                    <label><p><input className="form-elemts" type = "password" onChange = { e => setPassword(e.target.value) } placeholder = " ******" /> </p> </label> 
                    <p> <div> <button className = "loginButton" type = "submit" onClick = { handleLogin } > LOGIN </button> </div > </p>
                </form>
        </div>
    </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

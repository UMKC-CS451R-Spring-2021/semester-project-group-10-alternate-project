import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css'
import http from "./http-common";
import uicon from './uicon.png'

export default function Login(props) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    // handle click event of login button
    const handleLogin = e => {
        // if input is valid, we let the form submit
        if (username != "" && password == "GinaC9") {
            props.history.push('/dashboard'); 
            console.log("Login Successful");}

        if (username != "" && password != "GinaC9") {
            e.preventDefault();
            console.log("Login Failed: Incorrect Password!");
            // alert ("Error: Username and correct Password Required");
            setErrorMessage('Incorrect Password!');}

        else {
            // We prevent the form from being sent by canceling the event
            e.preventDefault();
            console.log("Login Failed: Missing Username & Password ");
            // alert ("Error: Username and correct Password Required");
            setErrorMessage('Username and Password Required!');
        }
        
    }
    return ( 
    <div className = "container" >
        {/* <div className = "top-bar"></div> */}
        <div className = "bg-img"></div>
        <div className = "login-wrapper" >
            <div className = "login-icon"><img src={ uicon} alt="icon" width="60" height="60"/></div>
            <div className = "loginID" > <h1> Login Here</h1></div>
                <form >
                    <label><input className="form-elemts" type = "username" onChange = { e => setUserName(e.target.value) } placeholder = "Username" required /></label> 
                    <label><p><input className="form-elemts" type = "password" onChange = { e => setPassword(e.target.value) } placeholder = " ******" required /></p></label> 
                    <p> <div> <button className = "loginButton" type = "submit" onClick = { handleLogin } > LOGIN </button> </div > </p>
                    {errorMessage && (<p className="login-error"> {errorMessage} </p>)}
            </form>
        </div>
    </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

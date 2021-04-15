import React from 'react';
//import { Redirect } from 'react-router';
import './Login.css'

export default function Login() {

    // const onSubmit = () => {
    //     // if(userFound)
    //     return <
    //         Redirect to = '/Dashboard.js' / >
    // }
    return ( <
        div className = "bg" >
        <
        div className = "login-wrapper" >
        <
        div className = "loginID" > < h1 > LoginID < /h1> </div >
        <
        p > < /p > <
        form >
        <
        label >
        <
        input type = "text"
        placeholder = "Username" / >
        <
        /label> <
        label >
        <
        p > <
        input type = "password"
        placeholder = " ******" / > < /p> < /
        label > <
        div className = "middle" > < p >
        <
        link to = "dashboard.js" >
        <
        /link><
        button type = "submit"

        onClick = "/dashboard.js" > LOGIN < /button> </p > < /
        div > <
        /form> < /
        div >
        <
        /div>
    )
}
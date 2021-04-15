import React from 'react';
import './Search.css'

export default function Add() {
    return ( <
        div className = "addProf-wrapper" >
        <
        h1 > New Professor Info < /h1> <
        form >
        <
        p > Teacher Name < /p> <
        label >
        <
        input type = "text"
        value = "Name" / >
        <
        /label> <
        p > Teacher ID < /p> <
        label >
        <
        input type = "text"
        value = "#####" / >
        <
        /label> <
        p > Unavailability < /p>

        <
        label >
        <
        input type = "datetime"
        value = "03/25/2021" / >
        <
        input type = "time"
        value = "07:20 to 12:45" / >
        <
        /label> <
        p > Teacher Course < /p> <
        label >
        <
        input type = "text"
        value = "e.g. Statistical Learning" / >
        <
        /label> <
        p > Prefered Courses < /p> <
        label >
        <
        input type = "text"
        value = "e.g. Statistical Learning" / >
        <
        /label> <
        p > Notes < /p> <
        label >
        <
        input type = "text"
        value = "" / >
        <
        /label> <
        p >
        <
        button > CANCEL < /button> <
        t > < /t><button> CREATE</button >
        <
        /p> < /
        form >
    )
}
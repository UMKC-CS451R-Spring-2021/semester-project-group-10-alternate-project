import React from 'react';
import './Search.css'

export default function EDIT() {
    return ( <
        div className = "editProf-wrapper" >
        <
        h1 > Professor Info < /h1>

        Teacher Name

        <
        input type = "text"
        value = "Name" / >

        <
        p > ID < /p> <
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
        p > Courses < /p> <
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
        button > CANCEL < /button><button> EDIT</button >
        <
        /p>
    )
}
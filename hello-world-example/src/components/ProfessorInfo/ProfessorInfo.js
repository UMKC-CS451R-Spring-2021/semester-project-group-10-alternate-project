import React from 'react';
import './ProfessorInfo.css'

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
        input type = "date"
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
        button type = "submit" > CANCEL < /button>  <
        button type = "submit" > EDIT < /button> </
        p >
        <
        /div>
    )
}
import React from 'react';
import './EditProfessor.css'

export default function EDIT() {
    return ( 
        <div className = "editProf-wrapper">
            <div>
                <div className="prof-title"> <h1> Edit Professor Info </h1></div>
                    <input type = "text" placeholder = "First Name" / ><br></br>
                    <input type = "text" placeholder = "MI." / ><br></br>
                    <input type = "text" placeholder = "Last Name" / ><br></br>
                    <input type = "text" placeholder = "Teacher ID" / >
                </div>
            <div className="form-titles">
                <p> Days and Times Unavailable: </p>
            <div className="unavailability">
                <p>"03/25/2021"</p>
                <p>"07:20 to 12:45"</p>
            </div>
            <p className="form-titles"> Courses </p> 
                <p className="course-boxes"> CS 101L</p>
                <p className="course-boxes"> IT 235</p>
                <p className="course-boxes"> COM 201</p>
            {/* <p className="form-titles"> Prefered Courses </p>  */}

                <p className="course-boxes"> FILM 101</p>
                <p className="course-boxes"> COFFEE</p>
                <p className="course-boxes"> JS 201</p>
            <p className="form-titles"> Notes </p> 
                <input className="notes" type = "text" value = "" />
            </div>
            <p>
            <button className="button" type = "submit" > CANCEL </button>  
            <button className="button" type = "submit" > DONE </button> </p>
        </div>
    )
}
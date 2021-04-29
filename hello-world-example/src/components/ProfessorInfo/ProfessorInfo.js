import React from 'react';
import './ProfessorInfo.css'

export default function EDIT(props) {
    // handle click event of logout button
    const handleLogout = () => {
        props.history.push('/login');
    }
    
    // handle click event of teacher button
    const handleTeacher = () => {
        props.history.push('/search');
    }

    // handle click event of back button
    const back = () => {
        props.history.push('/search');
    }

    // handle click event of edit button
    const edit = () => {
        props.history.push('/editProfessorInfo');
    }
    return ( 
        <div className = "container">
            <div className = "top-bar"></div>
            <div className = "wrapper">
                <div className = "side-dashboard">
                        <div class="title"><h3>Dashboard</h3></div><hr></hr>
                        <div class="butons active" onClick = { handleTeacher } > Teacher </div>
                        <div class="butons">Courses</div>
                        <div class="butons">Semester</div>
                        <div class="butons" onClick = { handleLogout }>Logout</div>
                </div>
                
                <div className="main">
                    <div className = "editProf-wrapper">
                        <div>
                            <div className="prof-title"> <h1> Professor Info </h1></div>
                                <div className="profid-wrapper">
                                    <p className="display"> Teacher Names</p> 
                                    <p className="display"> Teacher ID </p>
                                </div>
                            </div>
                            <div className="form-titles"> <p> Days and Times Unavailable: </p>
                            <div className="unavailability">
                                <p>"03/25/2021"</p>
                                <p>"07:20 to 12:45"</p>
                            </div>
                            
                            <p className="form-titles"> Courses </p> 
                                <p className="course-boxes"> CS 101L</p>
                                <p className="course-boxes"> IT 235</p>
                                <p className="course-boxes"> COM 201</p>
                            <p className="form-titles"> Prefered Courses </p> 
                                <p className="course-boxes"> FILM 101</p>
                                <p className="course-boxes"> COFFEE</p>
                                <p className="course-boxes"> JS 201</p>
                            <p className="form-titles"> Notes </p> 
                            <input className="notes" type = "text" value = "" />
                        </div>
                        <div className="all-buttons">
                            <button className="button" onClick = { back}> BACK </button> <button className="button" onClick = { edit}> EDIT</button ></div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}
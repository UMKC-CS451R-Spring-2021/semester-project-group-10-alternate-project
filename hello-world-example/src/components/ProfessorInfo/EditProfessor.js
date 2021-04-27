import React from 'react';
import './EditProfessor.css'

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
        props.history.push('/professorInfo');
    }

    // handle click event of edit button
    const edit = () => {
        props.history.push('/editProfessorInfo');
    }
    return ( 
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
                    <div className="prof-title"> <h1> Edit Professor Info </h1></div>
                    
                        <fieldset className="name-wrapper">
                            <legend><h3>Teacher Name</h3></legend>
                            <label>
                                <div>
                                    First Name: <input type = "text" placeholder = "First Name" />
                                </div>
                                <div>
                                    MI: <input type = "text" placeholder = "MI." />
                                </div>
                                <div>
                                    Last Name: <input type = "text" placeholder = "Last Name" />
                                </div>
                            </label> 
                        </fieldset>
                        <fieldset className="name-wrapper">
                            <legend>
                            <h3>Teacher ID</h3>
                            </legend>
                            <label>
                                ID: <input type = "numbers" placeholder = "#####" />
                            </label> 
                        </fieldset>
                        
                        <fieldset className="name-wrapper">
                            <legend><h3>Unavailability</h3></legend>
                            <label>
                                <input type = "datetime-local" /> to 
                                <input type = "time" />
                            </label> 
                        </fieldset>

                        
                        <p className="form-titles"> Courses </p> 
                            <p className="course-boxes"> CS 101L</p>
                            <p className="course-boxes"> IT 235</p>
                            <p className="course-boxes"> COM 201</p>
                        <p className="form-titles"> Prefered Courses </p> 
                            <p className="course-boxes"> FILM 101</p>
                            <p className="course-boxes"> COFFEE</p>
                            <p className="course-boxes"> JS 201</p>
                            <fieldset className="name-wrapper">
                        <legend>
                        <h3>Notes</h3>
                        </legend>
                        <label>
                        <textarea rows="4" cols="50" placeholder="Enter text..."/>
                    </label>
                    </fieldset>
                        <div className="all-buttons">
                            <button className="button" onClick = { back}> CANCEL </button> <button className="button" onClick = { back}> DONE</button >
                        </div>
                    
                    </div>
                    
            
            </div>
            
        </div>
        </div>
    )
}
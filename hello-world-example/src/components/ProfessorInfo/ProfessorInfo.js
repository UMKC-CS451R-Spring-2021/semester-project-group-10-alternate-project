import React, { useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './ProfessorInfo.css'

export default function EDIT(props) {
    const [value, onChange] = useState(new Date());
    // handle click event of logout button
    const handleLogout = () => {
        props.history.push('/login');
    }
    
    // handle click event of dashboard button
    const handleDashboard = () => {
        props.history.push('/dashboard');
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
    // handle click event of teacher button
    const handleSemester = () => {
        props.history.push('/semester');
    }

    // handle click event of teacher button
    const handleCourse = () => {
        props.history.push('/course');
    }
    
    return ( 
        <div className = "container">
            <div className = "top-bar"></div>
            <div className = "wrapper">
                <div className = "side-dashboard">
                        <div class="title" onClick = { handleDashboard }><h3>Dashboard</h3><hr></hr></div>
                        <div class="sidebar-buttons active" onClick = { handleTeacher } > Teacher </div>
                        <div class="sidebar-buttons" onClick = { handleSemester}>Semester</div>
                        <div class="sidebar-buttons" onClick = { handleCourse }>Courses</div>
                        <div class="sidebar-buttons" onClick = { handleLogout }>Logout</div>
                </div>
                
                <div className="main">
                    <div className = "editProf-wrapper">
                        <div>
                            <div className="prof-title"> <h1> Professor Info </h1></div>
                                <div className="profid-wrapper">
                                    Name<p className="display"> Teacher Names</p> 
                                    ID<p className="display"> Teacher ID </p>
                                </div>
                            </div>
                            <div className="form-titles"> <h3> Unavailability </h3>
                            <div className="unavailability">
                            {/* <Calendar onChange={onChange} showWeekNumbers value={value} /> */}
                                <p>"03/25/2021"</p>
                                <p>"07:20 to 12:45"</p>
                            </div>
                            <div>
                                <h3 className="form-titles"> Courses </h3> 
                                    <p className="course-boxes"> CS 101L</p>
                                    <p className="course-boxes"> IT 235</p>
                                    <p className="course-boxes"> COM 201</p>
                                <h3 className="form-titles"> Prefered Courses </h3> 
                                    <p className="course-boxes"> FILM 101</p>
                                    <p className="course-boxes"> COFFEE</p>
                                    <p className="course-boxes"> JS 201</p>
                                <h3 className="form-titles"> Notes </h3> 
                            </div>
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
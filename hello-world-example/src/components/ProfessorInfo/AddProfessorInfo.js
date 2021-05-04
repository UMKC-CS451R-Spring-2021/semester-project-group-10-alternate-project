import React from 'react';
import './AddProfessorInfo.css'

export default function Add(props) {
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

    // handle click event of teacher button
    const handleSemester = () => {
        props.history.push('/semester');
    }

    // handle click event of teacher button
    const handleCourse = () => {
        props.history.push('/course');
    }

    // handle click event of back button
    const handleSearchBack = () => {
        props.history.push('/search');
    }

    // handle click event of back button
    const handleViewProfessorInfo = () => {
        props.history.push('/professorInfo');
    }
    return ( 
        <div className = "container">
            <div className = "top-bar"></div>
            <div className="wrapper">
                <div className = "side-dashboard">
                    <div class="title" onClick = { handleDashboard }><h3>Dashboard</h3><hr /></div>
                    <div class="sidebar-buttons active" onClick = { handleTeacher } > Teacher </div>
                    <div class="sidebar-buttons" onClick = { handleSemester }>Semester</div>
                    <div class="sidebar-buttons" onClick = { handleCourse }>Courses</div>
                    <div class="sidebar-buttons" onClick = { handleLogout }>Logout</div>
                </div>
                <div className = "addProf-wrapper" >
                    <div className="newprof-title"><h1> Add New Professor </h1></div>
                    <form className="">
                        <fieldset className="name-wrapper">
                            <legend><h3>Teacher Name</h3></legend>
                            <label className = "name-key">First Name: </label> <input className = "name-fields" type = "text" placeholder = "First Name" /><br></br>
                            <label className = "name-key"> MI: </label> <input className = "name-fields" type = "text" placeholder = "MI." /><br></br>
                            <label className = "name-key"> Last Name: </label><input className = "name-fields" type = "text" placeholder = "Last Name" required />
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
                            <label><input className = "name-fields" type = "date" /> <input type = "time" /> to <input type = "time" /></label> 
                        </fieldset>

                        <fieldset className="name-wrapper">
                            <legend><h3>Courses</h3></legend>
                            <label className = "name-key">General: </label> <input className = "name-fields" type = "text" placeholder = "e.g. Statistical Learning" /> <br></br>
                                {/* <div>
                                    <p className="course-boxes"> CS 101L</p>
                                    <p className="course-boxes"> COM 201</p>
                                </div> */}
                            <label className = "name-key"> Preferred: </label><input className = "name-fields" type = "text" placeholder = "e.g. Statistical Learning" />
                                {/* <div>
                                    <p className="course-boxes"> CS 101L</p>
                                    <p className="course-boxes"> COM 201</p>
                                </div> */}
                        </fieldset>
                        <fieldset className="name-wrapper">
                            <legend><h3>Notes</h3></legend>
                            <label><textarea rows="4" cols="50" placeholder="Enter text..."/></label>
                        </fieldset>
                            <div className="all-buttons">
                                <button className="button" onClick = { handleSearchBack}> CANCEL </button> 
                                <button className="button" onClick = { handleSearchBack }> CREATE</button >
                            </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}
import React from 'react';
import '../Semester/Semester.css'
import './Course.css'

export default function EDIT(props) {
    // handle click event of teacher button
    const handleTeacher = () => {
        props.history.push('/search');
    }

    // handle click event of dashboard button
    const handleDashboard = () => {
        props.history.push('/dashboard');
    }

    // handle click event of teacher button
    const handleSemester = () => {
        props.history.push('/semester');
    }

    // handle click event of back button
    const back = () => {
        props.history.push('/search');
    }

    // handle click event of logout button
    const handleLogout = () => {
        props.history.push('/login');
    }
        
    return ( 
        <div className = "container">
            <div className = "top-bar"></div>
                <div className = "wrapper">
                    <div className = "side-dashboard">
                        <div class="title" onClick = { handleDashboard }><h3>Dashboard</h3><hr></hr></div>
                        <div class="sidebar-buttons" onClick = { handleTeacher } > Teacher </div>
                        <div class="sidebar-buttons active" onClick = { handleSemester } >Semester</div>
                        <div class="sidebar-buttons">Courses</div>
                        <div class="sidebar-buttons" onClick = { handleLogout }>Logout</div>
                    </div>
                    <div className = "content">
                        <div className="semester-title"><h1> Semester Scheduler </h1></div>
                        <div>
                            <h3> Semester   <select className = "semester-dropdown"> <option value = "" selected = "selected">SP 20</option></select></h3>
                            <div className = "table-wrapper">
                                <table className="">
                                    <tr className = "table-wrap">
                                        <th>TEACHER</th>
                                        <th>CourseID</th>
                                        <th>CourseNAME</th>
                                    </tr>
                                    <tr>
                                        <td>Gharibi G.</td>
                                        <td>ML 4400</td>
                                        <td>Machine Learning</td>
                                    </tr>
                                    <tr>
                                        <td>Bingham Kendall</td>
                                        <td>CS 470</td>
                                        <td>DBMS - Database Mgt System</td>
                                    </tr>
                                    <tr>
                                        <td>Kevin Hart</td>
                                        <td>Comedy 101</td>
                                        <td>Full Standup</td>
                                    </tr>
                                    <tr>
                                        <td>Seth Roger</td>
                                        <td>STATA</td>
                                        <td>Statistical Learning</td>
                                    </tr>
                                    
                                </table>
                            </div>
                            <div className="al-buttons"><button className="button" onClick = { back}> BACK </button></div>
                        </div>
                    </div>
                    <div className = "course-side">
                        <div className = "course-side-content">
                            <div className="semester-title"><h1> Courses </h1></div>
                                <div className = "search-box">
                                    <div className="search-instruction"> Enter CourseID or Name</div>
                                    <input className = "search-placeholder" type = "text" placeholder = "Enter CourseID or Name" / >
                                </div>
                            </div>
                            <div className = "course-body">
                                <input className = "course-side-checbox" type = "checkbox"></input>fgfg
                                
                            </div>
                            <div className="al-buttons">
                                    <button className="button" onClick = { back}> ADD </button>
                            </div> 
                    </div>
            </div>
        </div>
    )
}
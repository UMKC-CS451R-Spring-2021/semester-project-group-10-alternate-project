import React from 'react';
import './Semester.css'

export default function EDIT(props) {
    // handle click event of teacher button
    const handleTeacher = () => {
        props.history.push('/search');
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
                        <div class="title"><h3>Dashboard</h3></div><hr></hr>
                        <div class="butons" onClick = { handleTeacher } > Teacher </div>
                        <div class="butons active" onClick = { handleSemester } >Semester</div>
                        <div class="butons">Courses</div>
                        <div class="butons" onClick = { handleLogout }>Logout</div>
                    </div>
                    <div className = "content">
                        <div className="semester-title"><h1> Semester Scheduler </h1></div>
                        <div>
                            <h3> Semester   <select className = "semester-dropdown"> <option value = "" selected = "selected">SP 20</option></select></h3>
                            <div className = "">
                                <table>
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
                                        <td>DBMS</td>
                                        <td>CS 470</td>
                                    </tr>
                                    <tr>
                                        <td>Kevin Hart</td>
                                        <td>Comedy 101</td>
                                        <td>Full Standup</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="all-buttons"><button className="button" onClick = { back}> BACK </button></div>
                        </div>
                        
                    </div>

            </div>
                
                    
        </div>
    )
}
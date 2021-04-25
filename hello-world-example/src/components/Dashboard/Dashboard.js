import React from 'react';
import './Dashboard.css'
import Search from '../TeacherSearch/Search'
import axios from 'axios'
import TeacherResource from '../../Resources/TeacherResource'

function Dashboard(props) {

    // handle click event of logout button
    const handleLogout = () => {
        props.history.push('/login');
    }
    
    // handle click event of teacher button
    const handleTeacher = () => {
        props.history.push('../TeacherSearch/Search.js');
    }

    const getAllTeachers = () => {
        (new TeacherResource).get().then(response => {
            console.log(response);            
        });
    }
    
    return ( 
    <div className = "dashboard-wrapper" >
        <div className="dashboard">
            <h1> Dashboard</h1>
        </div>
        <div>
            <button className="elements" type = "button" onClick = { getAllTeachers } > Teacher </button> </div> 
        <div>
            <button className="elements" type = "submit" > Courses </button> </div> 
        <div >
            <button className="elements" type = "submit" > Semester </button> </div>
        <div> 
            <input className = 'logout' type = "button" onClick = { handleLogout } value = "Logout" />
        </div> 
    </div>
    )
}

export default Dashboard;
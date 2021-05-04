import React from 'react';
import './Dashboard.css'
import logo from './logo.png'
import Search from '../TeacherSearch/Search'
import Semester from '../Semester/Semester'
import axios from 'axios'
import TeacherResource from '../../Resources/TeacherResource'


function Dashboard(props) {

    // handle click event of logout button
    const handleLogout = () => {
        props.history.push('/login');
    }
    
    // handle click event of teacher button
    const handleTeacher = () => {
        props.history.push('/search');
        (new TeacherResource).get().then(response => {
            console.log(response);            
        });
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
            <div className = "top-bar">
                <div className = "top-bar-content">
                    {/* <div className = "welcome"> Welcome Gina</div>
                    <div className = "login-icon"><img src={ logo} alt="icon" width="200" height="60"/></div> */}
                </div>
                
            </div>
            <div className = "dashboard-wrapper" >
                <div className="dashboard-title"><h1> Dashboard</h1></div>
                <div><button className="dashboard-elements" type = "button" onClick = { handleTeacher} > Teacher </button> </div> 
                <div><button className="dashboard-elements" type = "button" onClick = { handleSemester}> Semester </button> </div>  
                <div><button className="dashboard-elements" type = "submit" onClick = { handleCourse}> Courses </button> </div>
                <div><input className = 'logout' type = "button" onClick = { handleLogout } value = "Logout" /></div> 
            </div>
        </div>
    )
}

export default Dashboard;
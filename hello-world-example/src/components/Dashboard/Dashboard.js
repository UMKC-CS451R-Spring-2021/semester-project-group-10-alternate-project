import React from 'react';
import './Dashboard.css'
import Search from '../TeacherSearch/Search'

function Dashboard(props) {

    // handle click event of logout button
    const handleLogout = () => {
        props.history.push('/login');
    }
    return ( 
    <div className = "dashboard-wrapper" >
        <div className="dashboard">
            <h1> Dashboard</h1>
        </div>
        <div>
            <button className="elements" onclick = "../TeacherSearch/Search.js" > Teacher </button> </div> 
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
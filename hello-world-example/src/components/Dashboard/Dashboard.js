import React from 'react';
import './Dashboard.css'
import Search from '../TeacherSearch/Search'

function Dashboard(props) {

    // handle click event of logout button
    const handleLogout = () => {
        props.history.push('/login');
    }
    return ( <
        div className = "dashboard-wrapper" >
        <
        h1 > Dashboard < /h1> <
        div >
        <
        button onclick = "../TeacherSearch/Search.js" > Teacher < /button> < /
        div > <
        div >
        <
        button type = "submit" > Courses < /button> < /
        div > <
        div >
        <
        button type = "submit" > Semester < /button> < /
        div >
        <
        div > <
        input className = 'logout'
        type = "button"
        onClick = { handleLogout }
        value = "Logout" / >
        <
        /div> < /
        div >
    )
}

export default Dashboard;
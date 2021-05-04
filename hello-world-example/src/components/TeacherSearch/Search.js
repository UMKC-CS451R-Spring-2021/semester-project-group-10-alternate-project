import React from 'react';
import './Search.css'
import TeacherResource from '../../Resources/TeacherResource'

export default function Search(props) {
    
    // handle click event of logout button
    const handleLogout = () => {
        props.history.push('/login');
    }

    // handle click event of dashboard button
    const handleDashboard = () => {
        props.history.push('/dashboard');
    }

    // handle click event of semester button
    const handleSemester = () => {
        props.history.push('/semester');
    }    

    // handle click event of teacher button
    const handleTeacher = () => {
        props.history.push('/search');
    }

    // handle click event of teacher button
    const handleCourse = () => {
        props.history.push('/course');
    }

    // handle click event of add new button
    const addTeacher = () => {
        props.history.push('/addProfessorInfo');
    }
    
    // handle click event of add new button
    const viewTeacher = () => {
        props.history.push('/ProfessorInfo');
    }

    var output;
    const getAllTeachers = () => {
        (new TeacherResource).get().then(response => {
            console.log(response);
            output = "<p>";
            var i;
            for (i = 0; i < response.data.length; i++){
                output += "ID: " + String(i)
                    + "       Name: " + String(response.data[i].firstName)
                    + "       " + String(response.data[i].lastName);
                output += "       <a src='professorInfo'>Edit</a><br>";
            }
            output += "</p>";
            var doc = document.getElementById("output");
            doc.innerHTML = output;
            return output; 
        });
    }
    
    return (
        <div className = "container">
            <div className = "top-bar"></div>
            <div className = "wrapper">
                <div className = "side-dashboard">
                    <div class="title" onClick = { handleDashboard }><h3>Dashboard</h3><hr></hr></div>
                    <div class="sidebar-buttons active" onClick = { handleTeacher } > Teacher </div>
                    <div class="sidebar-buttons" onClick = { handleSemester }>Semester</div>
                    <div class="sidebar-buttons" onClick = { handleCourse }>Courses </div>
                    <div class="sidebar-buttons" onClick = { handleLogout }>Logout</div>
                </div>
                <div className = "main-content">
                    <div className = "search-content"> 
                        {/* <div className = "title">Professor Search</div> */}
                        <div className = "search-box">
                            <div className="search-instruction"> Professor Search</div>
                            <input className = "search-placeholder" type = "text" placeholder = "Enter teacher ID or Name" / >
                        </div>
                        <div><button className="search-button" onClick={ viewTeacher}> Search </button></div> 
                        <div className="or-divider">OR</div>
                        <div><button className="newprof-button" type = "button" onClick = { getAllTeachers}> View All Teachers </button> <button className ="newprof-button" onClick={ addTeacher}> Add New Teacher </button></div> 
                    </div>
                </div>
            </div>
        </div>
        
    )
}
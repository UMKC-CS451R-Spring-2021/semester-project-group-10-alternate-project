import React from 'react';
import './Search.css'

export default function Search(props) {
    
    // handle click event of logout button
    const handleLogout = () => {
        props.history.push('/login');
    }
    
    // handle click event of teacher button
    const handleTeacher = () => {
        props.history.push('/search');
    }

    // handle click event of teacher button
    const handleSemester = () => {
        props.history.push('/semester');
    }
    
    // handle click event of add new button
    const addTeacher = () => {
        props.history.push('/addProfessorInfo');
    }
    
    // handle click event of add new button
    const viewTeacher = () => {
        props.history.push('/ProfessorInfo');
    }
    
    return (
        <div className = "container">
            <div className = "top-bar"></div>
            <div className = "wrapper">
                <div className = "side-dashboard">
                    <div class="title"><h3>Dashboard</h3></div><hr></hr>
                    <div class="butons active" onClick = { handleTeacher } > Teacher </div>
                    <div class="butons"onClick = { handleSemester }>Semester</div>
                    <div class="butons">Courses </div>
                    <div class="butons" onClick = { handleLogout }>Logout</div>
                </div>
                <div className = "main-content">
                    <div className = "search-content"> 
                        {/* <div className = "title">Professor Search</div> */}
                        <div className = "search-box">
                            <div className="search-instruction"> Enter teacher ID or Name</div>
                            <input className = "search-placeholder" type = "text" placeholder = "Search" / >
                        </div>
                        <div><button className="search-button" onClick={ viewTeacher}> Search </button></div> 
                        <div className="or-divider">OR</div>
                        <div><button className ="newprof-button" onClick={ addTeacher}> Add New Teacher </button></div> 
                    </div>
                </div>
            </div>
        </div>
        
    )
}
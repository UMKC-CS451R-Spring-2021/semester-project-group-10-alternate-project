import React from 'react';
import './Search.css'

export default function Search() {
    return (
        //5 total div tags for the teacher search
        <div className = "allsearch-wrapper" >
            <div className = "search-box" >
                <p className="search-instruction"> Enter teacher ID or Name</p>
                <input className = "search-placeholder" type = "text" placeholder = "Search" / >
            </div>
            <div>
                <button className="search-button" type = "submit" > Search </button> 
            </div> 
            
            <p className="or">OR</p>
            <div>
                <button className ="newprof-button" type = "submit" > Add New Teacher </button> 
            </ div> 
        </div>
    )
}
import React from 'react';
import './Search.css'

export default function Search() {
    return ( <
        div className = "search-wrapper" >
        <
        div className = "search-box" >
        <
        h6 > Enter teacher ID or Name < /h6> <
        input type = "text"
        placeholder = "Search" / >
        <
        div >
        <
        button type = "submit" > Search < /button> <
        /div></div >

        <
        p > < h1 > OR < /h1></p >

        <
        div >
        <
        button type = "submit" > Add New Teacher < /button> <
        /div> <
        /div>
    )
}
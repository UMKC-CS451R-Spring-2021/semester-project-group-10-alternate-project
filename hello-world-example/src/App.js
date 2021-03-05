import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

var editCount = 0;

function editButton(e){
  console.log("edit function");
  editCount++;
  const newElement = (
    <form id="profForm">
      <button onClick={editButton}>Edit</button>
      <button onClick={addButton}>Add New</button>
      <p id="profID">
        Prof ID:
        <input type="text"></input>
      </p>
      <p id="profName">
        Prof Name:
        <input type="text"></input>
      </p>
      <p id="isDraft">Is Draft: {}</p>
      <p id="profAvailability">Availability: {}</p>
      <p id="profTeachableCourses">Teachable Courses: {}</p>
      <p id="profPrefCourses">Preffered Courses: {}</p>
      <p id="profCurrSchedule">Current Schedule: {}</p>
      <p id="profNotes">Notes:</p>
      <textarea></textarea>

      <button>Save Draft</button>
      <button>Finalize</button>
    </form>
  );
  ReactDOM.render(newElement, document.getElementById("profForm"));
  e.preventDefault();
}

function addButton(e){
  console.log("add function");
  e.preventDefault();
}

function App() {
  return (
    <div className="App">
      <h1>Professor Info</h1>
      <div id="profForm">
        <form>
          <button onClick={editButton}>Edit</button>
          <button onClick={addButton}>Add New</button>
          <p id="profID">Prof ID: {}</p>
          <p id="profName">Prof Name: {}</p>
          <p id="isDraft">Is Draft: {}</p>
          <p id="profAvailability">Availability: {}</p>
          <p id="profTeachableCourses">Teachable Courses: {}</p>
          <p id="profPrefCourses">Preffered Courses: {}</p>
          <p id="profCurrSchedule">Current Schedule: {}</p>
          <p id="profNotes">Notes: {}</p>
        </form>
      </div>
    </div>
  );
}

export default App;

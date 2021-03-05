import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Professor Info</h1>
      <form>
        <button>Edit</button>
        <button>Add New</button>
      </form>
      <p>Prof ID: {}</p>
      <p>Prof Name: {}</p>
      <p>Is Draft: {}</p>
      <p>Availability: {}</p>
      <p>Teachable Courses: {}</p>
      <p>Preffered Courses: {}</p>
      <p>Current Schedule: {}</p>
      <p>Notes: {}</p>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import List from './components/List';
import { useState } from 'react';
import AddStudent from './components/AddStudent';

function App() {

  const [students, addStudent] = useState([
    {
      id: 1,
      rollno: "24",
      firstname: "Alan",
      lastname: "Paul",
      checkin: "09:00 AM",
      checkout: "04:00 PM",
    },
    {
      id: 1,
      rollno: "24",
      firstname: "James",
      lastname: "Calloway",
      checkin: "09:00 AM",
      checkout: "04:00 PM",
    },
    {
      id: 1,
      rollno: "24",
      firstname: "Arthur",
      lastname: "King",
      checkin: "09:00 AM",
      checkout: "04:00 PM",
    },
  ])

  const addStudents = (student) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newStudent = { id, ...student}
    addStudent([...students, newStudent])
  }

  return (
    <div className="container">
      <Header/>
      <AddStudent addStudents={addStudents}/>
      <List students={students}/>
    </div>
  );
}

export default App;

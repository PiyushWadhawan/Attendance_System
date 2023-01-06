import './App.css';
import Header from './components/Header';
import List from './components/List';
import { useState } from 'react';
import AddStudent from './components/AddStudent';

function App() {

  const [students, addStudent] = useState([
    {
      id: 1,
      firstname: "Alan",
      lastname: "Paul",
      rollno: "24",
      checkin: "09:00 AM",
      checkout: "04:00 PM",
    },
    {
      id: 2,
      firstname: "James",
      lastname: "Calloway",
      rollno: "30",
      checkin: "10:15 AM",
      checkout: "04:45 PM",
    },
    {
      id: 3,
      firstname: "Arthur",
      lastname: "King",
      rollno: "14",
      checkin: "08:30 AM",
      checkout: "05:00 PM",
    },
  ])

  const addStudents = (student) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newStudent = { id, ...student}
    console.log(student)
    addStudent([...students, newStudent])
    console.log(students)
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

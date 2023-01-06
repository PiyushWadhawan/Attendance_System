import React from 'react'
import Button from './Button'

function Header({ students, showAddStudent, setShowAdd}) {

  return (
    <header className='header'>
      <h1>Attendance System</h1>
      <div>
        <h4>Total Students: &nbsp;&nbsp; <span>{students.length}</span></h4>
        <Button color={showAddStudent? "red": "blue"} text={showAddStudent? "Close": "Add"} executeTask={setShowAdd}/>
      </div>
    </header>
  )
}

export default Header

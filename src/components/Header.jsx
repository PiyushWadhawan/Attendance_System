import React from 'react'
import Button from './Button'

function Header({ showAddStudent, setShowAdd}) {

  return (
    <header className='header'>
      <h1>Attendance System</h1>
      <Button color={showAddStudent? "red": "blue"} text={showAddStudent? "Close": "Add"} executeTask={setShowAdd}/>
    </header>
  )
}

export default Header

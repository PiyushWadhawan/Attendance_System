import React from 'react'
import Button from './Button'

function Header() {

    const executeTask = () => {
        console.log("Click")
    }

  return (
    <header className='header'>
      <h1>Attendance System</h1>
      <Button color="blue" text="Add" executeTask={executeTask}/>
    </header>
  )
}

export default Header

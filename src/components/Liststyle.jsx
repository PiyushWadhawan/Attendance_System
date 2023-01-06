import React from 'react'

function Liststyle({ rollno, firstname, lastname, checkin, checkout }) {
  return (
    <div className='task'>
        <div className="name">
            <p>{firstname}</p>
            <p>{lastname}</p>
        </div>
        <p>{rollno}</p>
        <p>{checkin}</p>
        <p>{checkout}</p>
    </div>
  )
}

export default Liststyle

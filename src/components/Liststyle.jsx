import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

function Liststyle({ id, rollno, firstname, lastname, checkin, checkout, deleteStudent }) {

  return (
    <div className='task'>
        <div className="name">
            <p>{firstname}</p>
            <p>{lastname}</p>
        </div>
        <p>{rollno}</p>
        <p>{checkin}</p>
        <p>{checkout}</p>
        <span className='delete' onClick={() => deleteStudent(id)}><AiFillDelete/></span>
    </div>
  )
}

export default Liststyle

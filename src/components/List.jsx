import React from 'react'
import Liststyle from './Liststyle'

function List({ students }) {

  return (
    <div>
      <div className='task main'>
        <div className="name">
            <h3>Firstname</h3>
            <h3>LastName</h3>
        </div>
        <h3>Rollno</h3>
        <h3>Checkin</h3>
        <h3>Checkout</h3>
      </div>
      {students.map((student) => (
        <Liststyle key={student.id} firstname={student.firstname} lastname={student.lastname} rollno={student.rollno} checkin={student.checkin} checkout={student.checkout} />
      ))} 
    </div>
  )
}

export default List

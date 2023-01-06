import React from 'react'
import { useState } from 'react'

function AddStudent({ addStudents }) {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [roll, setRoll] = useState('')
    const [inn, setInn] = useState('')
    const [out, setOut] = useState('')

  return (
    <form className='add-form' onSubmit={addStudents}>
        <div className="form-control">
            <label>Firstname</label>
            <input type="text" placeholder='Enter firstname' value={fname} onChange={(e) => setFname(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Lastname</label>
            <input type="text" placeholder='Enter lastname' value={lname} onChange={(e) => setLname(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Roll No</label>
            <input type="text" placeholder='Enter Roll no' value={roll} onChange={(e) => setRoll(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Checkin Time</label>
            <input type="text" placeholder='00:00 AM/PM' value={inn} onChange={(e) => setInn(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Checkout Time</label>
            <input type="text" placeholder='00:00 AM/PM' value={out} onChange={(e) => setOut(e.target.value)}/>
        </div>

        <input type="submit" value="Enter student" className='btn btn-block'/>

    </form>
  )
}

export default AddStudent

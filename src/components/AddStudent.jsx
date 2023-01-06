import React from 'react'
import { useState } from 'react'

function AddStudent({ addStudents }) {

    const [firstname, setFname] = useState('')
    const [lastname, setLname] = useState('')
    const [rollno, setRoll] = useState('')
    const [checkin, setInn] = useState('')
    const [checkout, setOut] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!firstname) {
            alert("Please enter Firstname")
            return
        }

        else if(!lastname) {
            alert("Please enter Lirstname")
            return
        }

        else if(!rollno) {
            alert("Please enter Roll No")
            return
        }

        else if(!checkin) {
            alert("Please enter checkin time")
            return
        }

        else if(!checkout) {
            alert("Please enter check checkout")
            return
        }

        addStudents({firstname, lastname, rollno, checkin, checkout})
        setFname('')
        setLname('')
        setRoll('')
        setInn('')
        setOut('')
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label>Firstname</label>
            <input type="text" placeholder='Enter firstname' value={firstname} onChange={(e) => setFname(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Lastname</label>
            <input type="text" placeholder='Enter lastname' value={lastname} onChange={(e) => setLname(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Roll No</label>
            <input type="text" placeholder='Enter Roll no' value={rollno} onChange={(e) => setRoll(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Checkin Time</label>
            <input type="text" placeholder='00:00 AM/PM' value={checkin} onChange={(e) => setInn(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Checkcheckout Time</label>
            <input type="text" placeholder='00:00 AM/PM' value={checkout} onChange={(e) => setOut(e.target.value)}/>
        </div>

        <input type="submit" value="Enter student" className='btn btn-block'/>

    </form>
  )
}

export default AddStudent

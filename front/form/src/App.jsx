import React, { useState } from 'react'
import axios from 'axios'

function App() {
const [name , setName] = useState("")
const [age, setAge] = useState("")
const [phone , setPhone] = useState("")
 
const Submitted = (e)=>{
  e.preventDefault()
  axios.post("http://localhost:5000/student/new" ,{
    name:name,
    age:age,
    phone:phone
  })
  .then((result)=>{
console.log(result)
  })
}



  return (
    <form onSubmit={Submitted}>
      <div className='head'>
        <label htmlFor="Name"> Name :</label>
        <input type="text" placeholder=' Enter Your FirstName' id='name' value={name} onChange={(e)=>{setName(e.target.value)}} /><br />

        <label htmlFor="age"> Age :</label>
        <input type="text" placeholder=' Enter Your age' id='age' value={age} 
        onChange={(e)=>{setAge(e.target.value)}}/><br />

        <label htmlFor="Phone">Phone : </label>
        <input type="Phone" placeholder=' Enter Your Phone Number' id='phonenum'value={phone} onChange={(e)=>{setPhone(e.target.value)}} /><br />


        <button className='btn'>Submit</button>
      </div>
    </form>
  )
}

export default App

import React,{useState} from 'react'


function Server() {
 const [change,setChange]=useState("");

 const handleChange = (event) => {
   setChange (event.target.value)
   
 }

 const handleInput = (event) => {
    event.preventDefault();
   console.log(change)
 }
  return (
    <div>
        <form onSubmit={handleInput} >
            <input type='text' onChange={handleChange} placeholder='input' value={change} />
            <button type='submit' name='Send' > Submit</button>
        </form>
    </div>
  )
}

export default Server

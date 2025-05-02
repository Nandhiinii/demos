import React, { useState } from 'react'
import Form from './Form'

const Practice = () => {
  const[value,SetValue]=useState("")
  const handleChange=(event)=>{
    SetValue(event.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handleChange}/>
      <p>You Typed:{value}</p>
       <Form/>
    </div>
   
  )
}

export default Practice
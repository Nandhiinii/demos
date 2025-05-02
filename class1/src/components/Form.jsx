import React from 'react'

const Form = () => {
    const handleSubmit=(event)=>{
        event.preventDefault()
        alert("Form submitted")
    }
    const Doubleclick=()=>{
        alert("you clicked me!")
    }
    const handleMouseEnter = () => {
        console.log("Mouse entered");
      };
    
      const handleMouseLeave = () => {
        console.log("Mouse left");
      };
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" />
    <button type="submit">Submit</button>
   
  </form>
   <button onDoubleClick={Doubleclick}>Clicked</button>
   <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      Hover over me
    </div>
   </>
  )
}

export default Form
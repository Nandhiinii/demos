import React, { useState } from 'react'

const Counter = () => {
    let [count,SetCount]=useState(0)
    const handleIncrease=()=>{
       SetCount(count+1)
    }
    const handledecrease=()=>{
        SetCount(count-1)
    }
  return (
    <div>
        <h1>Counter--{count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handledecrease}>Increase</button>
    </div>
  )
}

export default Counter
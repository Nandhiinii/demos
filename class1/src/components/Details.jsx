import React, { useState } from 'react'
import Product from './Product'


const Details = () => {
  const [data, setData] = useState({ name: "Nandhini", age: 23 })

  return (
    <div>
      <h1>Shop Details</h1>
      <Product product={data}/>
   
    </div>
  )
}

export default Details

import React from 'react'

const Product = ({product}) => {
    console.log(product);
  
  return (
    <div>Product
        <h3>{product.name}</h3>
        <h3>{product.age}</h3>
    </div>
    
  )
}

export default Product
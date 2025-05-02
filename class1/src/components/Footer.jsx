import React from 'react'
import Counter from './Counter'
import List from './List'
import Forms from './Forms'

const Footer = () => {
  let user="valliammal"
  function something() {
    user="Nandhini"
    console.log(user)
  }
  return (
    <div>
      <button onClick={something}>Click This</button>
      <Counter/>
      <List/>
      <Forms/>
    </div>
   
  )
}

export default Footer
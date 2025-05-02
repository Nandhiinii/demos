import React, { useState } from 'react'

const Forms = () => {
    function handlechange(event){
       SetName(event.target.value)
       console.log(event.target.value)
    }
    const [name,SetName]=useState("")
    const[hansubmit,Sethansubmit]=useState("")
    function handlesubmit(event){
        Sethansubmit(name)
        event.preventDefault();
    }
    const categories = ['Grocery', 'Electronics', 'Beverages'];
    const [category, setCategory] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div>
        <h1>Forms</h1>
        <h1>Hello {name}</h1>
        <h1>Display after submit{hansubmit}</h1>
        <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Enter your name" onChange={handlechange} value={name} />
        <button type="button" >Submit</button>


       

<select multiple value={selectedItems} onChange={(e) => {
  const selected = Array.from(e.target.selectedOptions, option => option.value);
  setSelectedItems(selected);
}}>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
</select>

        </form>
    </div>
  )
}

export default Forms
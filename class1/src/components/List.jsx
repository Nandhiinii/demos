import React from 'react'

const List = () => {
  const students=[
    {id:1,name:"Nandhini",age:23},
    {id:2,name:"Valliammal",age:63},
    {id:3,name:"Muthu",age:23},
  ]
  return (
    <div>
     <table>
        <tr>
            <thead>
                <th>S.No</th>
                <th>Name</th>
                <th>Age</th>
            </thead>
        </tr>
        <tbody>
          {students.map(student=>(
            <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
            </tr>
          ))
          }
        </tbody>
     </table>
    </div>
  )
}

export default List

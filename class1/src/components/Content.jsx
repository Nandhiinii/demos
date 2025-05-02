import React from 'react'
import styled from 'styled-components';
import Practice_key from './Practice_key';
import Details from './Details';

const content = () => {
  //Internal style
  const myStyle = {
    color: "white",
    backgroundColor: "red",
    padding: "10px",
    fontFamily: "Arial"
  };
  let Button =styled.button
  `background-color:blue;
  color:white;
  padding:10px;
  border:none;
  border-radius:5px;`
  let NewButton=styled(Button)
  `box-shadow: 0 0 5px 2px red;`
  return (
    <div>
      <main>
        <h1 style={myStyle}>Nandhini</h1>
        <Button>Click Me</Button>
        <NewButton>Click Me</NewButton>
      </main>
      <Practice_key/>
      <Details/>
    </div>
  
  )
}

export default content
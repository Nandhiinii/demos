import React from 'react'

const nan = () => {
    const handleKeyDown = (e) => {
        console.log("Key down:", e.key);
      };
    
      const handleKeyUp = (e) => {
        console.log("Key up:", e.key);
      };
  return (
    <div>
       <input onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />;
    </div>
  )
}

export default nan
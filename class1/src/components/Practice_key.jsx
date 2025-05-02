import React from 'react'

const Practice_key = () => {
    const handleLoad = () => {
        console.log("Image loaded");
      };
  return (
    <div>
       <div
  onDragOver={(e) => e.preventDefault()}
  onDrop={() => alert("Dropped!")}>
  Drop here
</div>
    </div>
  )
}

export default Practice_key
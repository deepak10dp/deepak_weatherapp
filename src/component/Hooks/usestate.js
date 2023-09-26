import React, { useState } from 'react'
import "./style.css"


const Usestate = () => {
  const initialData=10;
  const [something,setSomething]=React.useState(initialData) // if use state is not defined in cosole just write React. kaam ho jayega
  
  console.log(initialData)
  return (
    <div>
      
      <div className="bttns">
        <p>{something}</p>
        <button type='button' className='bttn' onClick={()=>setSomething(something+1)}>Increment</button>
        <button type='button' className='bttn' onClick={()=>something>0 ? setSomething(something-1) :setSomething(0) }>decrement</button>
      </div>
      
        
      
    </div>
  )
}

export default Usestate

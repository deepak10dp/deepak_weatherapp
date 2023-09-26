import React, { useEffect } from 'react'

const UseEffect = () => {
    // const initialData=0;
  const [something,setSomething]=React.useState(0)    // if use state is not defined in cosole just write React. kaam ho jayega
  React.useEffect(() => {
    document.title=`chats(${something})`
  }, )
  
                                                            //hooks are always witten on top  before return    
  return (
    <div>
      <div className="bttns">
        <p>{something}</p>
        <button type='button' className='bttn' onClick={()=>setSomething(something+1)}>Increment</button>
       </div>
    </div>
  )
}

export default UseEffect

import React, { useReducer} from 'react'
import "./style.css"
const reducer=(state,action)=>{
    if(action.type==="INCR"){
        state=state+1
    }
    if( state>0 && action.type==="DECR"){
        state=state-1
    }
    return state 

}

const UseReducer = () => {
  
    const[state,dispatch]=useReducer(reducer,0)
  return (
    <div>
      
      <div className="bttns">
        <p>{state}</p>
        <button type='button' className='bttn' onClick={()=>{
            dispatch({type:"INCR"})
        }}>Increment</button>

        <button type='button' className='bttn'onClick={()=>{
            dispatch({type:"DECR"})
        }} >decrement</button>
      </div>
      
        
      
    </div>
  )
}

export default UseReducer

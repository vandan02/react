import React, { useState } from 'react'

const Counter = () => {

    let [count,setcounter] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setcounter(count+1)}>+</button>
      <button onClick={()=>setcounter(count>0?count-1:count=0)}>-</button>
    </div>
  )
}

export default Counter

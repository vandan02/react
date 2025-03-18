import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleReducer } from './redux/loginslice';


const App = () => {
  const isActive=useSelector((state)=>state.login.isActive);
  const dispatch=useDispatch();
  return (
    <div>
       <button onClick={() => dispatch(toggleReducer())}>
      {isActive ? "login" : "logout"}
    </button>
    </div>
  )
}

export default App

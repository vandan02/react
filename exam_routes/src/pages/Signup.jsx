import React, { useState } from 'react'
import Cookies from "js-cookies";

const Signup = () => {
  let [user,setuser]=useState({
    username:'',
    email:'',
    password:''
  })

  const handleChange=(e)=>{

    setuser({...user,[e.target.name]:e.target.value})
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(user);
    localStorage.setItem('user',JSON.stringify(user));
    Cookies.set('user',user);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username" value={user.username} onChange={handleChange} />
        <input type="email" placeholder="email" name="email" value={user.email} onChange={handleChange} />
        <input type="password" placeholder="password" name="password" value={user.password} onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
  
    </div>
  )
}

export default Signup

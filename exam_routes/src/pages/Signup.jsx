import React, { useState } from 'react';
import Cookies from "js-cookie"; 

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
 
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    Cookies.set('User', JSON.stringify(user));
    console.log("User added:", user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="username" value={user.username} onChange={handleChange} />
        <input type="email" placeholder="Email" name="email" value={user.email} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

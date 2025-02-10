import React, { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const [finduser, setFindUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFindUser({ ...finduser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(
      (user) =>
        user.email === finduser.email && user.password === finduser.password
    );

    if (user) {
      Cookies.set("User", JSON.stringify(user));
      alert("Login successful!");
      console.log("Logged in user:", user);
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={finduser.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={finduser.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

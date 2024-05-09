import axios from "axios";
import React, { useEffect, useState } from "react";
import { isTokenExpired } from "../../utils";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });

  const inputHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const loginHandler = async () => {
    const {data: {tokens}} = await axios.post('http://localhost:4000/user/signin', input)
    console.log('success', tokens);
    localStorage.setItem('tokens', JSON.stringify(tokens))
  };


  useEffect(() => {
    if(!localStorage.getItem('tokens')) return 
    isTokenExpired(JSON.parse(localStorage.getItem('tokens')).accessToken)
  }, []);

  return (
    <div>
      <h2>Sign up with gmail</h2>
      <input
        type="text"
        name="email"
        value={input.email}
        onChange={inputHandler}
      />
      <input
        type="password"
        name="password"
        value={input.password}
        onChange={inputHandler}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Login;

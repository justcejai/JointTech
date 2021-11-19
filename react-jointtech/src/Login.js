import React, { useState, useEffect } from 'react';
import { useHistory, userHistory } from 'react-router'
import axios from 'axios';

const Login = (history) => {
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

  

  const submitHandler = async(e) => {
    e.preventDefault();
  
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };


      const { data } = await axios.post(
        "/api/login", 
        {
          email, 
          password,
        }, 
        config
      );


      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data));


    } catch (error) {
      setError(error.response.data.message);
    }
    const params = new URLSearchParams({ email })
    window.location = `/Home?${params.toString()}`;
  }



  return (
    <div class="body">

      <div id="top-of-page" class="container-fluid">
        <div class="container">
          <div class="title">
            <h1 class="text-white">JOINTTECH</h1>
          </div>

          <div class="row">
            <div class="col">
              <a href="/" target="_blank">
                <button class="button">
                  Landing Page
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="log-in-container">
        <div class="row">
          <h3 class="log-in-text">Login</h3>
          <form onSubmit={submitHandler}>
            {error && "Invalid email or password."}
            <div>
              <label className="log-in-text namecolor" for="name"></label>
              <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div>
              <label className="log-in-text" for="email"></label>
              <input type="password" id="password" name="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} required />
            </div>
              <button className="login-button" type="submit">Login</button>
          </form>
          <label>Need to signup for an account?</label> <a href="/signup">Register</a>
        </div>
      </div>

    </div>
  );
}

export default Login;
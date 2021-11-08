import React, { useState, useEffect } from 'react';
import { userHistory } from 'react-router'
import axios from 'axios';
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // handle button click of login form

  //Login function
  function handleLogin(event) {
    event.preventDefault();
   
    const user = {
      username: email,
      password: password
    }

    fetch('http://localhost:3000/api/login', {
      method: "POST",
      header: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    }) 
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("token", data.token)
    })
    
  }

  useEffect(() => {
    fetch('http://localhost:3000/api/isUserAuth', {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    })
    .then(res => res.json())
    .then(data => data.isLoggedin ? history.push("/home"): null)
  }, [])

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
          <form onSubmit={event => handleLogin(event)}>
            <div>
              <label className="log-in-text namecolor" for="name">Email</label>
              <input type="email" id="email" name="email" onChange={(event) => setEmail(event.target.value)} required />
            </div>
            <div>
              <label className="log-in-text" for="email">Password</label>
              <input type="password" id="password" name="password" onChange={(event) => setPassword(event.target.value)} required />
            </div>
              <button className="login-button" type="submit">Login</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;
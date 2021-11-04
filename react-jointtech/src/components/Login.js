import React, { useState } from 'react';
import axios from 'axios';

let fullEmail;
let password;
function Login(props) {
 
  const [fullEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handle button click of login form


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
            <div>
              <p class="log-in-text">Username<br /></p>
              <input type="text" value={fullEmail} {...fullEmail} autoComplete="new-password" placeholder="| u s e r n a m e"/>
            </div>
            <div style={{ marginTop: 10 }}>
            <p class="log-in-text">Password<br /></p>
              <input type="password" value={password} {...password} autoComplete="new-password" placeholder="| p a s s w o r d"/>
            </div>
            <hr></hr>
            <br /><br />
            <input type="button"  onClick={loginSubmit} /><br />

        </div>
      </div>

    </div>
  );
}

function loginSubmit(event) {

  fetch('http://localhost:3000/api/routes/users/login', {
      method: "POST",
      credentials: "include",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: fullEmail, password })
  })
  .then(response => response.json())
  .then(async data => {
      console.log(data);
  })
}

export default Login;
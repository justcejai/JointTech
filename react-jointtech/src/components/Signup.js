import React, { useState } from 'react';

let fullName;
let fullEmail;
let password;

function Signup() {
      const [fullName, setName] = useState('');
      const [fullEmail, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
    //   function signupSubmit(event) {

    //     fetch('http://localhost:3000//api/routes/users/signup', {
    //         method: "POST",
    //         credentials: "include",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({  fullName, username: fullEmail, password })
    //     })
    //     .then(response => response.json())
    //     .then(async data => {
    //         console.log(data);
    //     })
    // }
      
      function handleSubmit(event) {
        event.preventDefault();
        // console.log({ name, email, password });
        fetch('http://localhost:3000/api/users/signup', {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  fullName, username: fullEmail, password })
        })
        .then(response => response.json())
        .then(async data => {
            console.log(data);
        })
        const params = new URLSearchParams({fullName, fullEmail, password});
        window.location = `/Home?${params}`;
      }

      return  (
        <div>
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
                    
                    <h1 className="log-in-text">Sign up</h1>
         

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="log-in-text namecolor" for="name">Name</label>
                            <input type="text" id="name" name="name" onChange={(event) => setName(event.target.value)} required/>
                        </div>
                        <div>
                            <label className="log-in-text" for="email">Email</label>
                            <input type="email" id="email" name="email" onChange={(event) => setEmail(event.target.value)} required/>
                        </div>
                        <div>
                            <label className="log-in-text" for="name">Password</label>
                            <input type="password" id="password" name="password" onChange={(event) => setPassword(event.target.value)} required/>
                        </div>
                        <button className="signup-button" type="submit" >Register</button>
                    </form>
                    
                    <hr/>
                        
                    <a href="/login">
                        <button class="button">
                            Landing Page
                        </button>
                    </a>

                    </div>
            </div>
        </div>
      )     
}

function signupSubmit(event) {

    fetch('http://localhost:3000//api/routes/users/signup', {
        method: "POST",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  fullName, username: fullEmail, password })
    })
    .then(response => response.json())
    .then(async data => {
        console.log(data);
    })
}

export default Signup;
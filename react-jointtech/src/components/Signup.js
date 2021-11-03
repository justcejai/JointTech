import React, { useState } from 'react';


export default function Signup() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    

      function handleSubmit(event) {
        event.preventDefault();
        console.log({ name, email, password });
        const params = new URLSearchParams({name, email, password});
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
         

                    <form action="/signup"  method="POST">
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
                        <button className="signup-button" type="submit">Register</button>
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

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

function Signup() {
      const [name, setName] = useState("")
      const [username, setUsername] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
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
            "/api/register", 
            {
              name,
              username,
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
        
        const params = new URLSearchParams({ name, username })
        window.location = `/Home?${params.toString()}`;
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
    
                    <form onSubmit={submitHandler}>
                        <div>
                            <label className="log-in-text namecolor" htmlFor="name"></label>
                            <input type="text" class="form-control" id="name" name="name" placeholder="Full name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label className="log-in-text namecolor" htmlFor="username"></label>
                            <input type="text" class="form-control" id="username" name="username" placeholder="Username"  onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div>
                            <label className="log-in-text" htmlFor="email"></label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label className="log-in-text" htmlFor="password"></label>
                            <input type="password" class="form-control" id="password" name="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <br></br>
                        <button className="signup-button" type="submit">Register</button>
                    </form>
                    <label>Already have an account?</label> <a href="/signup">Register</a>
                    <hr/>
                    </div>
            </div>
        </div>
      )     
}


export default Signup;
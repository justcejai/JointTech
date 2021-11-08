import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { URLSearchParams } from "url"

function Signup() {
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const history = useHistory()

      async function handleSignup(event) {
        event.preventDefault();
        const form = event.target
        console.log({ username: form[0].value, email: form[1].value, password: form[2].value })
        const user = {
          username: form[0].value,
          email: form[1].value,
          password: form[2].value,
        }
    
        try {
           const res = await fetch('/api/signup', {
                method: "POST",
                credentials: "include",
                header: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(user)
            }) 
            const data = await res.json()
            // console.log(data.message)
            window.location = `/Home`;
        } catch(err) {
            console.log(err)
        }
        
        
      }
    
    //   useEffect(() => {
    //     fetch('/api/getUserInfo', {
    //       headers: {
    //         "x-access-token": localStorage.getItem("token")
    //       }
    //     })
    //     .then(res => res.json())
    //     .then(data => data.isLoggedin ? history.push("/home"): null)
    //   }, [])
    
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
         

                    <form action= "/api/signup" method="POST" onSubmit={event => handleSignup(event)}>
                        <div>
                            <label className="log-in-text namecolor" for="name">Name</label>
                            <input type="text" id="username" name="username" onChange={(event) => setUsername(event.target.value)} required/>
                        </div>
                        <div>
                            <label className="log-in-text" for="email">Email</label>
                            <input type="email" id="email" name="email" onChange={(event) => setEmail(event.target.value)} required/>
                        </div>
                        <div>
                            <label className="log-in-text" for="password">Password</label>
                            <input type="password" id="password" name="password" onChange={(event) => setPassword(event.target.value)} required/>
                        </div>
                        <button className="signup-button" type="submit">Register</button>
                    </form>
                    
                    <hr/>
                        
                    <a href="/">
                        <button class="button">
                            Landing Page
                        </button>
                    </a>

                    </div>
            </div>
        </div>
      )     
}


export default Signup;
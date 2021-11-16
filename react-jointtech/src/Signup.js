import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { URLSearchParams } from "url"

function Signup() {
      const [name, setName] = useState('');
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const history = useHistory()

      async function handleSignup(event) {
        event.preventDefault();
        const form = event.target
        // console.log({ name: form[0].value, username: form[1].value, email: form[2].value, password: form[3].value })
        const user = {
          name: form[0].value,
          username: form[1].value,
          email: form[2].value,
          password: form[3].value,
        }
        console.log(user);
        try {
           const res = await fetch('/api/signup', {
                method: "POST",
                credentials: "same-origin",
                header: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(user)
            }) 
            const data = await res.json()
            console.log(data)
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
            {/* action= "/api/signup" method="POST" */}

            <div class="log-in-container">

                <div class="row">
                    
                    <h1 className="log-in-text">Sign up</h1>
         

                    <form onSubmit={event => handleSignup(event)}>
                        <div>
                            <label className="log-in-text namecolor" htmlFor="name"></label>
                            <input type="text" id="name" name="name" placeholder="Full name" onChange={(event) => setName(event.target.value)} required/>
                        </div>
                        <div>
                            <label className="log-in-text namecolor" htmlFor="username"></label>
                            <input type="text" id="username" name="username" placeholder="Username" onChange={(event) => setUsername(event.target.value)} required/>
                        </div>
                        <div>
                            <label className="log-in-text" htmlFor="email"></label>
                            <input type="email" id="email" name="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} required/>
                        </div>
                        <div>
                            <label className="log-in-text" htmlFor="password"></label>
                            <input type="password" id="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} required/>
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
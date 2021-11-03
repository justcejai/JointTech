import React, { useState } from 'react';
import axios from 'axios';


function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
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
            <div>
              <p class="log-in-text">Username<br /></p>
              <input type="text" {...username} autoComplete="new-password" placeholder="| u s e r n a m e"/>
            </div>
            <div style={{ marginTop: 10 }}>
            <p class="log-in-text">Password<br /></p>
              <input type="password" {...password} autoComplete="new-password" placeholder="| p a s s w o r d"/>
            </div>
            <hr></hr>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />

        </div>
      </div>

    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;
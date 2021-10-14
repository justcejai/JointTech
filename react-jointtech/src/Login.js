import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';

function Login(props) {

    const [username, setUsername] = useState(undefined);
    const [language, setLanguage] = useState(undefined);

    function login(event) {
        console.log({ username, language });
        const params = new URLSearchParams({email, password});
        window.location = `/home?${params.toString()}`;
        event.preventDefault();
    }

    return (
        <div className="d-flex justify-content-center mt-4 p">

            <h1>JointTech</h1>

            <p className="lead">Your event organizer! Just enter your information to get started.</p>

            <section className="row g-3 w-25" >
                <form onSubmit={home}>
                    <div className="input-group mb-3">
                        <input type="email" name="email" className="form-control" placeholder="Username" aria-label="Username" onChange={(event) => setEmail(event.target.value)} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="password" name="password" className="form-control" placeholder="Username" aria-label="Username" onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-danger">Log-in</button>
                </form>
            </section>

        </div>

        
    );
}

export default Home;
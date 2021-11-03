import "./style.css";
import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";

export default function LandingPage() {
    



    return (
        <div>
            <head>
              <meta charset="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"/>
              x
              <title>JointTech</title>

            </head>
            <body>
               <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

                <div id="top-of-page" class="container-fluid">
                    <div class="container">
                        <div class="title">
                            <h1 class="text-white">JOINTTECH</h1>
                        </div>   
                        
                        <div class="row">
                            <div class="col">
                                <a href="/signup" target="_blank">
                                    <button class="button">
                                        SignUp
                                    </button>
                                </a>
                            </div>

                            <div class="col">
                                <a href="/login" target="_blank">
                                    <button class="button">
                                        Log In    
                                    </button>    
                                </a> 
                            </div>                        
                        </div>
                    </div>              
                </div>

                <div id="why-us" class="container-fluid">
                    <div class="container col-10">

                        <div class="col-6">
                            <p class="text-white text-uppercase">Join JointTech</p>
                        
                            <h1 class="text-white font-bold">
                                Organize opportunity, engage in events!
                            </h1>

                            <br></br>
                            <p class="text-white">
                                Making life easier for busy students seeking powerful orgnization tools.
                            </p>
                        </div>

                        <div class="container col-6">
                            <div class="row">
                                <img src="https://i.postimg.cc/44LCVNRJ/jointtech-mockup.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <img src="https://i.ibb.co/hW9KLzz/bottom.png" class="bottom-img"></img>

                <div id="feature-title" class="bg-white">
                    <div class="container col-6 d-flex justify-content-center">
                        <h1 class="font-bold text-gray-800">
                            Our Features
                        </h1>
                    </div>
                    <div class="container col-6 d-flex justify-contents-center margin-bottom:0">
                        <div class="hr">
                            <hr class="hr"/>
                        </div>
                    </div>
                </div>

                <div id="feature-1" class="container-fluid">
                    <div class="container col-10">

                        <div class="col-6">
                            <p class="text-black text-uppercase">My Events Dashboard</p>

                            <br></br>
                            <p class="text-black">
                            Gain access to a comprehensive event calendar. Your dashboard gives you the power to add and remove events as you wish.
                            </p>
                        </div>

                        <div class="container col-6">
                            <div class="row">
                                <img src="https://i.ibb.co/cCysggp/jointtech-mockup-copy.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="feature-2" class="container-fluid">
                    <div class="container col-10">

                        <div class="container col-6">
                            <div class="row">
                                <img src="https://i.ibb.co/hR88y30/eventview.png" />
                            </div>
                        </div>

                        <div class="col-6">
                            <p class="text-black text-uppercase">Public Event Library</p>

                            <br></br>
                            <p class="text-black">
                            View upcoming events which you may want to attend. Events contianed detailed descriptions, time, and location.
                            </p>
                        </div>

                    </div>
                </div>

                <hr/>

                <div id="satisfied-users-title" class="bg-white">
                    <div class="container col-6 d-flex justify-content-center">
                        <h1 class="font-bold text-gray-800">
                            Satisfied Users
                        </h1>
                    </div>
                    <div class="container col-6 d-flex justify-contents-center margin-bottom:0">
                        <div class="hr">
                            <hr class="hr"/>
                        </div>
                    </div>
                </div>

                <div id="satisfied-users" class="container-fluid col-10">
                    <div class="row">
                       <div class="container col-4">
                           <div class="row">
                                <p class="text-gray-600 text-sx">NCSU Undergrad, Major: CS</p>

                                <div class="font-bold text-gray-800">
                                    Geoffrey Fylak
                                </div>

                                <p class="text-gray-800 text-base">
                                    <br></br>
                                    Through the Public Events page, I joined the Competetive Programming Club at NCSU.
                                </p>

                                <img src="https://i.ibb.co/khz9p6s/IMG-2861-copy.png"></img>
                            </div>
                        </div>
                        <div class="container col-4">
                            <div class="row">
                                <p class="text-gray-600 text-sx">NCSU Undergrad, Major: CS</p>

                                <div class="font-bold text-gray-800">
                                    Kacey Johnson
                                </div>

                                <p class="text-gray-800 text-base">
                                    <br></br>
                                    I was able to attend career development events which streamlined the process to landing my first job thanks to JointTech.
                                </p>

                                <img src="https://i.ibb.co/QYkTBfP/kjphoto.png"></img>
                            </div>
                        </div>
                        <div class="container col-4">
                            <div class="row">
                                <p class="text-gray-600 text-sx">NCSU Undergrad, Major: CS</p>

                                <div class="font-bold text-gray-800">
                                    Rene Haro
                                </div>

                                <p class="text-gray-800 text-base">
                                    <br></br>
                                    JointTech has enabled me to listen to several noteworthy guestspeakers at NCSU which I wouldn't have known about otherwise.
                                </p>

                                <img src="https://i.ibb.co/KXcJKVw/renephoto.png"></img>
                            </div>
                        </div>
                    </div>    
                </div>

                <img src="https://i.ibb.co/7W7sDv1/top.png" class="bottom-img"></img>
               
                <section id="lead" class="benefits p-3">
                    <div class="row">
                       <div class="container col-10 justify-content-center">
                          <h2 class="text-white">Sign up for the latest updates from JointTech!</h2>
                       </div>

                        <div class="container col-10 justify-content-center">
                            <a href="/signup" target="_blank">
                                <button class="lead-button">
                                    SignUp
                                </button>
                            </a>

                            <br/>
                            <br/>
                            <br/>
                        </div>       
                    </div>
                </section>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Signup} />
                    </Switch>
                </div>
            </body>

        </div>
    )
}




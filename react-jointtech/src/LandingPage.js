import "./style.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import Signup from './Signup';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function LandingPage() {
    return (
        <div>
            <head>
              <meta charset="utf-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>

              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"/>
              x
              <title>JointTech</title>

            </head>
            <body>
               <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
               <div id="header" class="container">
                   <h1>JointTech</h1>
                   <div class="value-prop">
                       <h2>Organize opportunity, engage in evenets.</h2>
                   </div>
               </div>

               <section id="heroimage" class="blue p-3">
                   <div class="container">
                       <div class="row">
                           <div class="col-md-6">
                               <div class="quote">
                                   <p>Powerful, organized, simple, JointTech.</p>
                               </div>
                           </div>
                           <div class="col-md-6">
                               <div class="image">
                               <img src="https://i.postimg.cc/44LCVNRJ/jointtech-mockup.png" alt="Phloat coming soon wireframe" height="400px" width="auto"/>
                               </div>
                           </div>
                           
                           <div class="col-md-9 m4 l3">
                               <div class="quote1">
                                   <p>"We created JointTech to bridge the gap between student organization and campus events."</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
               
               <section>
                   <div class="container">
                       <div class="col-md-3">
                           <div class="col-md-0">
                               <div class="image">
                                  <img src="https://i.ibb.co/MsrMXV4/Fidelity-Pablo-Martinez-NCSU.jpg" alt="Fidelity-Pablo-Martinez-NCSU" border="0" height="450px" width="auto"/>
                                  <div class="row-md-4">
                               <div class="quote">
                                   <p>Features</p>
                               </div>
                               <div class="list">
                                   <ul>
                                       <li>
                                           'My Events' Dashboard
                                       </li>
                                       <li>
                                           Public Event Quick View
                                       </li>
                                       <li>
                                           Public Event Swipe
                                       </li>
                                       <li>
                                           Detailed Event Information
                                       </li>
                                       <li>
                                           Secure Login
                                       </li>
                                   </ul>
                               </div>
                           </div>
                               </div>
                           </div>

                           

                           <div class="col-md-3">
                               <div class="image">
                                    
                               </div>
                           </div>
                       </div>
                   </div>
               </section>

               <section id="lead" class="benefits p-3">
                   <div class="container">
                      <div class="boom">
                         <h2>Sign up for the latest updates from JointTech!</h2>
                      </div>

                      <div class="quote">
                         <a href="/signup" target="_blank">Sign Up Now!</a>
                      </div>
                  </div>
              </section>
            </body>

        </div>
    )
}

export default LandingPage;
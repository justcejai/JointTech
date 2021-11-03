import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={() => <LandingPage />}/>
            </Switch>
            <Switch>
                <Route path="/login" exact component={() => <Login />}/>
            </Switch>
            <Switch>
                <Route path="/home" exact component={() => <Home />}/>
            </Switch>
            <Switch>
                <Route path="/signup" exact component={() => <Signup />}/>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);


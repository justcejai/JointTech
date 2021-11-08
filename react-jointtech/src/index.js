import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
// import CalendarCard from './CalendarCard';
// import CalEvent from './CalEvent';
// import QuickviewCard from './QuickviewCard';
// import QVEvent from './QVEvent';
import LandingPage from './LandingPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
    document.getElementById('root')
);
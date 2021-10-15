import React, { useState } from "react";
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';

let username;
let language;
let card, setCard;
let matches, setMatches;

class Home extends React.Component {
    render() { 
        return <div>
            <div><h1>JointTech</h1></div>
            <div className="" style={{backgroundColor: "#D3D3D3"}}>
                <div className="d-flex justify-content-around " style={{display: 'flex', flexDirection: 'row'}}>
                <Card header={"My Event Calendar"}/>
                <Card header={"Event Swipe"}/>
                <Card header={"Event Quickview"}/>
                </div>
                
            </div>
        </div>
        ;
    }
}
 
export default Home;
import React, { useState } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";
import CalendarCard from "./CalendarCard";
import QuickviewCard from "./QuickviewCard";

let username;
let language;
let card, setCard;
let matches, setMatches;

class Home extends React.Component {
   render() {
      return (
         <div>
            <div>
               <h1>JointTech</h1>
            </div>
            <div className="" style={{ backgroundColor: "#D3D3D3" }}>
               <div
                  className="d-flex justify-content-around "
                  style={{ display: "flex", flexDirection: "row" }}
               >
                  <CalendarCard />
                  <Card header={"Event Swipe"} />
                  <QuickviewCard />
               </div>
            </div>
         </div>
      );
   }
}

export default Home;

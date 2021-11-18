import React, { useContext } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";
import CalendarCard from "./CalendarCard";
import QuickviewCard from "./QuickviewCard";
// import UserContext from "./context/UserContext"

const events = [];

function Home() {
   // const [userContext, setUserContext] = useContext(UserContext)
   // Logout function
   function logout() {
      fetch("http://localhost/api/users/logout", {
         credentials: "include",
         headers: {
            "Content-Type": "applications/json",
            // Authorization: `Bearer ${userContext.token}`
         },
      }).then(async (response) => {
         // setUserContext(oldValues => {
         //    return {...oldValues, detials: undefined, token: null}
         // })
         window.localStorage.setItem("logout", Date.now());
      });
   }

   getEvents();

   return (
      <div>
         <div>
            <h1>JointTech</h1>
         </div>
         <div className="" style={{ backgroundColor: "#D3D3D3" }}>
            <div
               className="d-flex judstify-content-aroufnd "
               style={{ display: "flex", flexDirection: "row" }}
            >
               <CalendarCard eventList={events} />
               <Card header={"Event Swipe"} />
               <QuickviewCard eventList={events} addToCal={addMyCalendar()} />
            </div>
         </div>
      </div>
   );
}

function addMyCalendar() {}

function getEvents() {
   fetch("https://eventList7.free.beeceptor.com/events")
      .then((res) => res.json())
      .then((res) => {
         //console.log(res.events[0]);

         for (let i = 0; i < res.events.length; i++) {
            events.push(res.events[i]);
            //console.log(res.events[i]);
         }
      });
}

export default Home;

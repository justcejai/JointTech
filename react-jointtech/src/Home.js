import React, {  useContext } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";
import CalendarCard from "./CalendarCard";
import QuickviewCard from "./QuickviewCard";
// import UserContext from "./context/UserContext"
let username;
let language;
let card, setCard;
let matches, setMatches;

function Home() {
   // const [userContext, setUserContext] = useContext(UserContext)
   // Logout function
   function logout() {
      fetch("http://localhost/api/users/logout", {
         credentials: "include", 
         headers: {
            "Content-Type": "applications/json",
            // Authorization: `Bearer ${userContext.token}`
         }
      }).then(async response => {
         // setUserContext(oldValues => {
         //    return {...oldValues, detials: undefined, token: null}
         // })
         window.localStorage.setItem("logout", Date.now())
      })
   }
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

export default Home;

<<<<<<< HEAD
<<<<<<< HEAD
import React, {  useContext } from "react";
import { Redirect } from "react-router-dom";
=======
>>>>>>> ea2bf196c8471cee9e4d37a45520e41ea4d1878e
import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";
import CalendarCard from "./CalendarCard";
import QuickviewCard from "./QuickviewCard";
// import UserContext from "./context/UserContext"

const events = [];

function Home() {
<<<<<<< HEAD
   
   // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     history.push("/Home")
  //   }
  // }, [history])
   
//   const submitHandler = async(e) => {
//    e.preventDefault();
 
//    try {
//      const config = {
//        headers: {
//          "Content-type": "application/json",
//        },
//      };


//      const { data } = await axios.post(
//        "/api/login", 
//        {
//          email, 
//          password,
//        }, 
//        config
//      );

//      const params = new URLSearchParams({ email })
//      window.location = `/Home?${params.toString()}`;

//      console.log(data);
//      localStorage.setItem('userInfo', JSON.stringify(data));


//    } catch (error) {
//      setError(error.response.data.message);
//    }
//  }
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
               </div>
=======
   // const [userContext, setUserContext] = useContext(UserContext)
   // Logout function
   // function logout() {
   //    fetch("http://localhost/api/users/logout", {
   //       credentials: "include",
   //       headers: {
   //          "Content-Type": "applications/json",
   //          // Authorization: `Bearer ${userContext.token}`
   //       },
   //    }).then(async (response) => {
   //       // setUserContext(oldValues => {
   //       //    return {...oldValues, detials: undefined, token: null}
   //       // })
   //       window.localStorage.setItem("logout", Date.now());
   //    });
   // }

   //getEvents();

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
               <QuickviewCard addToCal={addMyCalendar()} />
>>>>>>> ea2bf196c8471cee9e4d37a45520e41ea4d1878e
            </div>
         </div>
      </div>
   );
}

function addMyCalendar() {}

// function getEvents() {
//    fetch("https://eventlist9.free.beeceptor.com/events")
//       .then((res) => res.json())
//       .then((res) => {
//          //console.log(res.events[0]);

//          for (let i = 0; i < res.events.length; i++) {
//             events.push(res.events[i]);
//             //console.log(res.events[i]);
//          }
//          console.log(events);
//       });
// }

export default Home;

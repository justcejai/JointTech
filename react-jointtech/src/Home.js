import React, {  useContext } from "react";
import { Redirect } from "react-router-dom";
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
            </div>
         </div>
      );
}

export default Home;

import React, { useState, useEffect } from "react";
let events = [];
let index = 0;
let length = 0;
const Card = (props) => {
   const [eventName, setEventName] = useState("");
   const [eventDescription, setEventDescription] = useState("");
   const [eventDate, setEventDate] = useState("");
   const [eventTime, setEventTime] = useState("");
   //const [events, setEvents] = useState([]);
   // const [length, setLength] = useState(events.length);
   function getEvents() {
      fetch("https://eventlist3.free.beeceptor.com/events")
         .then((res) => res.json())
         .then((res) => {
            events = res.events;
            length = events.length;
            processEvent();
         })
         .catch((err) => {
            console.log("no more evensts");
         });
   }

   function processEvent() {
      setEventName(events[index].name);
      setEventDescription(events[index].description);
      setEventTime(events[index].time);
      setEventDate(events[index].date);
   }

   function handleNextEvent() {
      //getEvents();
      if (index < length) {
         index++;
         //getEvents();
         console.log(index);

         processEvent();
      } else {
         alert("No more events");
      }
   }

   function handlePrevEvent(e) {
      if (index > 0) {
         index--;
         //getEvents();
         processEvent();
      } else {
         alert("No previous event");
      }
   }

   useEffect(() => getEvents(), []);

   return (
      <div
         className="border border-3 border-dark"
         style={{ width: "25%", backgroundColor: "#FFFFFF" }}
      >
         <div className="card-body" style={{ padding: 0 }}>
            <div
               className="border-bottom border-3 border-dark"
               style={{ backgroundColor: "#FF0000" }}
            >
               <h3 id="card-title" className="text-center text-white">
                  Event Swipe
               </h3>
            </div>

            <div className="d-flex justify-content-center">
               <div id="card-content" className="w-75" style={{ height: 400 }}>
                  <div className="p3  mt-5 mb-3 d-flex justify-content-left">
                     <h5>{eventName}</h5>
                  </div>

                  <div className="p3  mt-5 mb-3 d-flex justify-content-left">
                     {eventDescription}
                  </div>
                  <div className="d-flex justify-content-between">
                     <div className="p3  mt-5 mb-3 d-flex justify-content-left">
                        {eventDate}
                     </div>
                     <div className="p3  mt-5 mb-3 d-flex justify-content-left">
                        {eventTime}
                     </div>
                  </div>
               </div>
            </div>
            <div className="d-flex justify-content-center">
               <div className="w-75">
                  <div className="d-flex justify-content-between">
                     <button
                        onClick={handlePrevEvent}
                        type="button"
                        className="btn btn-secondary btn-sm"
                     >
                        Prev
                     </button>
                     <button
                        onClick={handleNextEvent}
                        type="button"
                        className="btn btn-secondary btn-sm"
                     >
                        Next
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;

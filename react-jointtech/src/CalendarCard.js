import React, { useState, useEffect } from "react";
import CalEvent from "./CalEvent";
import Modal from "react-modal";
import axios from "axios";

const CalendarCard = (props) => {
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [name, setName] = useState("");
   const [date, setDate] = useState("");
   const [time, setTime] = useState("");
   const [description, setDescritption] = useState("");
   const [showEvent1, setShowEvent1] = useState(true);
   const [showEvent2, setShowEvent2] = useState(true);
   const [showEvent3, setShowEvent3] = useState(true);
   const [showEvent4, setShowEvent4] = useState(true);
   const [showEvent5, setShowEvent5] = useState(true);

   const [event1, setEvent1] = useState(undefined);
   const [event2, setEvent2] = useState(undefined);
   const [event3, setEvent3] = useState(undefined);
   const [event4, setEvent4] = useState(undefined);
   const [event5, setEvent5] = useState(undefined);

   let events = [];

   function loadEvents() {
      renderEvent1();
      renderEvent2();
      renderEvent3();
      renderEvent4();
      renderEvent5();
   }

   function getEvents() {
      fetch("https://eventlist4.free.beeceptor.com/events/calendar")
         .then((res) => res.json())
         .then((res) => {
            //console.log(res.events[0]);

            // for (let i = 0; i < res.events.length; i++) {
            //    //events.push(res.events[i]);
            //    setEvents([...events, res.events[i]]);
            //    console.log(res.events[i]);
            // }

            //setEvents(res.events);
            events = res.events;
            console.log(events.length);
            console.log(events);
            loadEvents();
         })
         .catch((err) => {
            console.log("no more evensts");
         });
   }

   function handleSubmit(data) {
      data.preventDefault();
      setModalIsOpen(false);
      const newEvent = { name, description, date, time };
      console.log(newEvent);
      fetch("https://eventlist3.free.beeceptor.com/events", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newEvent),
      }).then(() => {
         console.log("event added to api");
         getEvents();
      });
   }

   function toggleEvent1() {
      setShowEvent1(false);
   }

   function toggleEvent2() {
      setShowEvent2(false);
   }

   function toggleEvent3() {
      setShowEvent3(false);
   }

   function toggleEvent4() {
      setShowEvent4(false);
   }

   function toggleEvent5() {
      setShowEvent5(false);
   }

   function renderEvent1() {
      if (events.length > 0) {
         setEvent1(
            <CalEvent
               name={events[0].name}
               description={events[0].description}
               date={events[0].date}
               time={events[0].time}
               hideEvent={toggleEvent1}
               wait={10}
            />
         );
      } else {
         setEvent1("");
      }
   }

   function renderEvent2() {
      if (events.length > 0) {
         setEvent2(
            <CalEvent
               name={events[1].name}
               description={events[1].description}
               date={events[1].date}
               time={events[1].time}
               hideEvent={toggleEvent2}
               wait={10}
            />
         );
      } else {
         setEvent2("");
      }
   }

   function renderEvent3() {
      if (events.length > 0) {
         setEvent3(
            <CalEvent
               name={events[2].name}
               description={events[2].description}
               date={events[2].date}
               time={events[2].time}
               hideEvent={toggleEvent3}
               wait={10}
            />
         );
      } else {
         setEvent1("");
      }
   }

   function renderEvent4() {
      if (events.length > 0) {
         setEvent4(
            <CalEvent
               name={events[3].name}
               description={events[3].description}
               date={events[3].date}
               time={events[3].time}
               hideEvent={toggleEvent4}
               wait={10}
            />
         );
      } else {
         setEvent1("");
      }
   }

   function renderEvent5() {
      if (events.length > 0) {
         setEvent5(
            <CalEvent
               name={events[4].name}
               description={events[4].description}
               date={events[4].date}
               time={events[4].time}
               hideEvent={toggleEvent5}
               wait={10}
            />
         );
      } else {
         setEvent1("");
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
               className="border-bottom border-3 border-dark mb-5"
               style={{ backgroundColor: "#FF0000" }}
            >
               <h3 id="card-title" className="text-center text-white">
                  Event Calendar
               </h3>{" "}
            </div>

            {event1}
            {event2}
            {event3}
            {event4}
            {event5}
            <div id="AddEvent" className="d-flex justify-content-center">
               <div className="col-6">
                  <button
                     type="button"
                     className="btn btn-secondary btn-lg mb-2"
                     onClick={() => setModalIsOpen(true)}
                  >
                     Add Event
                  </button>
                  <button
                     className="btn-small btn-secondary mb-2"
                     type="button"
                     onClick={getEvents}
                  >
                     Refresh
                  </button>
                  <p className="text-center">
                     The event you create will NOT be visible to other JointTech
                     users.
                  </p>
               </div>
            </div>
         </div>

         {/**  */}

         <div>
            <Modal
               ariaHideApp={false}
               isOpen={modalIsOpen}
               onRequestClose={() => setModalIsOpen(false)}
               style={{
                  modalDialog: {
                     width: "50%",
                  },
               }}
            >
               <h2>Add an Event</h2>
               <form onSubmit={handleSubmit}>
                  <div class="form-group">
                     <label for="EventName">Event Name</label>
                     <input
                        class="form-control"
                        id="eventName"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Event Name"
                        style={{ width: "30%" }}
                     />
                     <label for="EventDescription">Event Description</label>
                     <input
                        class="form-control"
                        id="eventName"
                        onChange={(e) => setDescritption(e.target.value)}
                        placeholder="Enter Event Description"
                        style={{ width: "30%" }}
                     />
                     <small id="emailHelp" class="form-text text-muted">
                        This event will <strong>not</strong> be visible to other
                        JointTech users.
                     </small>
                  </div>
                  <div className="d-flex" style={{ width: "100%" }}>
                     <div class="form-group">
                        <label for="Event Date">Date</label>
                        <input
                           type="date"
                           onChange={(e) => setDate(e.target.value)}
                           class="form-control"
                           id="EventDate"
                        />
                     </div>
                     <div class="form-group">
                        <label for="Event Time">Time</label>
                        <input
                           type="time"
                           onChange={(e) => setTime(e.target.value)}
                           class="form-control"
                           id="EventTime"
                        />
                     </div>
                  </div>
                  <div
                     id="buttons"
                     className="d-flex p-5 justify-content-around"
                     style={{ width: "30%" }}
                  >
                     <button type="submit" class="btn btn-primary">
                        Add Event
                     </button>
                     <button
                        className="btn btn-primary"
                        onClick={() => setModalIsOpen(false)}
                     >
                        Close
                     </button>
                  </div>
               </form>

               <div></div>
            </Modal>
         </div>
      </div>
   );
};

export default CalendarCard;

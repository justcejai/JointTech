import React, { useState } from "react";
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

   const getData = () => {
      fetch("localhost:5000/events", {
         headers: {
            "Content-Type": "application/json",
            Accept: "applicaition/json",
         },
      })
         .then(function (response) {
            console.log(response);
            return response.json();
         })
         .then(function (myJson) {
            console.log(myJson);
         });
   };

   function handleSubmit(event) {
      event.preventDefault();
      alert("A new event was created");

      const newEvent = {
         name,
         date,
         time,
         description,
      };

      axios.post(/**ENDPOINT URL*/);
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
                  My Event Calendar
               </h3>
            </div>

            {showEvent1 && (
               <CalEvent
                  description={"Sample Description 1"}
                  time={"5:00pm"}
                  date={"08/22/22"}
                  hideEvent={toggleEvent1}
               />
            )}
            {showEvent2 && (
               <CalEvent
                  description={"Sample Description 2"}
                  date={"10/20/21"}
                  time={"12:00pm"}
                  hideEvent={toggleEvent2}
               />
            )}
            {showEvent3 && (
               <CalEvent
                  description={"Sample Description 3"}
                  date={"10/25/21"}
                  time={"12:00pm"}
                  hideEvent={toggleEvent3}
               />
            )}

            <div id="AddEvent" className="d-flex justify-content-center">
               <div className="col-6">
                  <button
                     type="button"
                     className="btn btn-secondary btn-lg mb-2"
                     onClick={() => setModalIsOpen(true)}
                  >
                     Add Event
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

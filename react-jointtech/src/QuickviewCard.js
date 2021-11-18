import React, { useState } from "react";
import QVEvent from "./QVEvent";
import Modal from "react-modal";

const QuickviewCard = (props) => {
   const [modalIsOpen, setModalIsOpen] = useState(false);

   //const [events, setEvents] = useState([]);

   const eventList = props.eventList;
   const event1 = eventList[0];
   const event2 = eventList[1];
   const event3 = eventList[2];

   //alert(event1.description + eventList[0].description);
   console.log(eventList[0]);

   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [date, setDate] = useState("");
   const [time, setTime] = useState("");

   function handleSubmit(data) {
      data.preventDefault();
      alert("A new event was cresated");

      const newEvent = { name, description, date, time };
      console.log(newEvent);

      fetch(
         "https://08759fad-c406-4131-81e9-05a50d862cc5.mock.pstmn.io/events",
         {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEvent),
         }
      ).then(() => {
         console.log("event added to api");
      });
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
                  Event Quick View
               </h3>
            </div>
            <>
               <QVEvent
                  description={event1.description}
                  date={event1.date}
                  time={event1.time}
                  addEvent={addEvent}
                  wait={10}
               />

               <QVEvent
                  description={event2.description}
                  date={event2.date}
                  time={event2.time}
                  addEvent={addEvent}
                  wait={10}
               />

               <QVEvent
                  description={event3.description}
                  date={event3.date}
                  time={event3.time}
                  addEvent={addEvent}
                  wait={10}
               />
            </>

            <div id="AddEvent" className="d-flex justify-content-center">
               <div className="col-6">
                  <button
                     type="button"
                     className="btn btn-secondary btn-lg mb-2"
                     onClick={() => setModalIsOpen(true)}
                  >
                     Create Event
                  </button>
                  <p className="text-center">
                     The event you create will be visible to other JointTech
                     users.
                  </p>
               </div>
            </div>
            <div id="card-content" style={{ height: 400 }}></div>
         </div>

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
               <h2>Create an Event</h2>
               <form onSubmit={handleSubmit}>
                  <div class="form-group">
                     <label for="EventName">Event Name</label>
                     <input
                        class="form-control"
                        id="eventName"
                        placeholder="Enter Event Name"
                        style={{ width: "30%" }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                  </div>
                  <div class="form-group">
                     <label for="EventDescription">Event Description</label>
                     <textarea
                        class="form-control"
                        id="eventDescription"
                        placeholder="Enter Event Description"
                        style={{ width: "30%" }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                     />
                     <small id="emailHelp" class="form-text text-muted"></small>
                  </div>
                  <div className="d-flex" style={{ width: "100%" }}>
                     <div class="form-group">
                        <label for="Event Date">Date</label>
                        <input
                           type="date"
                           class="form-control"
                           id="EventDate"
                           value={date}
                           onChange={(e) => setDate(e.target.value)}
                        />
                     </div>
                     <div class="form-group">
                        <label for="Event Time">Time</label>
                        <input
                           type="time"
                           class="form-control"
                           id="EventTime"
                           value={time}
                           onChange={(e) => setTime(e.target.value)}
                        />
                     </div>
                  </div>
                  <div
                     id="buttons"
                     className="d-flex p-5 justify-content-around"
                     style={{ width: "30%" }}
                  >
                     <button type="submit" class="btn btn-primary">
                        Create Event
                     </button>
                     <button
                        className="btn btn-primary"
                        onClick={() => setModalIsOpen(false)}
                     >
                        Close
                     </button>
                  </div>
               </form>
               <small id="emailHelp" class="form-text text-muted">
                  This event <strong>will</strong> be visible to other JointTech
                  users.
               </small>
               <div></div>
            </Modal>
         </div>
      </div>
   );

   function addEvent(e) {
      console.log("hello");
      this.props.addToCal();
   }
};

export default QuickviewCard;

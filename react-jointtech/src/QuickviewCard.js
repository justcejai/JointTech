import React, { useEffect, useState } from "react";
import QVEvent from "./QVEvent";
import Modal from "react-modal";
import { on } from "events";
import { set } from "mongoose";

const QuickviewCard = (props) => {
   const [modalIsOpen, setModalIsOpen] = useState(false);

   //const [events, setEvents] = useState([]);

   //alert(event1.description + eventList[0].description);
   //console.log(eventList[0]);
   //console.log(eventList);

   //const [events, setEvents] = useState([]);
   let events = [];
   //let qvEventList = [];

   const [qvEventList, setQvEventList] = useState([]);
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [date, setDate] = useState("");
   const [time, setTime] = useState("");
   const [listOfEvents, setListOfEvents] = useState([]);
   let counter = 0;

   const [event, setEvent] = useState(undefined);
   const [event2, setEvent2] = useState(undefined);
   const [event3, setEvent3] = useState(undefined);
   const [event4, setEvent4] = useState(undefined);
   const [event5, setEvent5] = useState(undefined);

   function getEvents() {
      fetch("https://eventlist4.free.beeceptor.com/events")
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
            console.log("counter: " + counter++);
            loadEvents();
         })
         .catch((err) => {
            console.log("no more evensts");
         });
   }

   useEffect(() => getEvents(), []);

   function loadEvents() {
      console.log(events);
      setEvent(
         <QVEvent
            name={events[0].name}
            description={events[0].description}
            date={events[0].date}
            time={events[0].time}
            addEvent={addEvent}
            wait={10}
         />
      );
      // console.log(event);
      // console.log(qvEventList.length);
      // setQvEventList([...qvEventList, React.cloneElement(event)]);
      // console.log(qvEventList);
      // console.log(qvEventList);

      if (events.length > 1) {
         setEvent2(
            <QVEvent
               name={events[1].name}
               description={events[1].description}
               date={events[1].date}
               time={events[1].time}
               addEvent={addEvent}
               wait={10}
            />
         );
      }
      if (events.length > 2) {
         setEvent3(
            <QVEvent
               name={events[2].name}
               description={events[2].description}
               date={events[2].date}
               time={events[2].time}
               addEvent={addEvent}
               wait={10}
            />
         );
      }
      if (events.length > 3) {
         setEvent4(
            <QVEvent
               name={events[3].name}
               description={events[3].description}
               date={events[3].date}
               time={events[3].time}
               addEvent={addEvent}
               wait={10}
            />
         );
      }
      if (events.length > 4) {
         setEvent5(
            <QVEvent
               name={events[4].name}
               description={events[4].description}
               date={events[4].date}
               time={events[4].time}
               addEvent={addEvent}
               wait={10}
            />
         );
      }
   }
   function addEvent(e) {
      this.props.addToCal();
   }

   function handleSubmit(data) {
      data.preventDefault();

      setModalIsOpen(false);

      const newEvent = { name, description, date, time };
      console.log(newEvent);

      fetch("https://eventlist2.free.beeceptor.com", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newEvent),
      }).then(() => {
         console.log("event added to api");
         getEvents();
      });
   }

   //loadEvents();
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
            {event}
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
};

export default QuickviewCard;

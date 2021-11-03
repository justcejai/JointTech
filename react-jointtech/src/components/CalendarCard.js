import React, { Component, useState } from "react";
import CalEvent from "./CalEvent";
import Modal from "react-modal";

const CalendarCard = (props) => {
   const [modalIsOpen, setModalIsOpen] = useState(false);

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

            <CalEvent
               description={"Sample Description 1"}
               time={"5:00pm"}
               date={"08/22/22"}
            />
            <CalEvent
               description={"Sample Description 2"}
               date={"10/20/21"}
               time={"12:00pm"}
            />
            <CalEvent
               description={"Sample Description 3"}
               date={"10/25/21"}
               time={"12:00pm"}
            />

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
               <form>
                  <div class="form-group">
                     <label for="EventName">Event Name</label>
                     <input
                        class="form-control"
                        id="eventName"
                        placeholder="Enter Event Name"
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
                           class="form-control"
                           id="EventDate"
                        />
                     </div>
                     <div class="form-group">
                        <label for="Event Time">Time</label>
                        <input
                           type="time"
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

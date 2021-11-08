import React, { Component, useState } from "react";
import QVEvent from "./QVEvent";
import Modal from "react-modal";

const QuickviewCard = (props) => {
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
                  Event Quick View
               </h3>
            </div>

            <QVEvent
               description={"Sample Event 1"}
               date={"09/13/2021"}
               time={"2:00pm"}
            />
            <QVEvent
               description={"Sample Event 2"}
               date={"09/14/2021"}
               time={"9:00am"}
            />
            <QVEvent
               description={"Sample Event 3"}
               date={"09/17/2021"}
               time={"1:30pm"}
            />

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
                        This event <strong>will</strong> be visible to other
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

               <div></div>
            </Modal>
         </div>
      </div>
   );
};

export default QuickviewCard;

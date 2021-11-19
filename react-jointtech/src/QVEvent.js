import React, { Component } from "react";

class QVEvent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hidden: true,
         name: this.props.name,
         description: this.props.description,
         date: this.props.date,
         time: this.props.time,
      };
   }

   componentDidMount() {
      setTimeout(() => {
         this.setState({
            hidden: false,
         });
      }, this.props.wait);
   }

   handleAddEvent = () => {
      //alert("A new event was cresated");

      let newEvent = {
         name: this.props.name,
         description: this.props.description,
         date: this.props.date,
         time: this.props.time,
      };
      console.log(newEvent);

<<<<<<< HEAD
      fetch("https://eventlist3.free.beeceptor.com/events/calendar", {
=======
      fetch("https://eventlist4.free.beeceptor.com/events/calendar", {
>>>>>>> ea2bf196c8471cee9e4d37a45520e41ea4d1878e
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newEvent),
      }).then(() => {
         console.log("event added to my calendar");
      });
   };

   render() {
      return this.state.hidden ? (
         " "
      ) : (
         <div id="Event1" className="p-3 d-flex justify-content-around">
            <div id="E1Body">
               <div id="E1Desc" className="">
                  {this.props.name}
               </div>
               <div
                  id="E1TimeDate"
                  className="d-flex justify-content-around"
                  style={{ display: "flex", flexDirection: "row" }}
               >
                  <div style={{ width: "50%" }}>
                     <p>{this.props.time}</p>
                  </div>
                  <div style={{ width: "50%" }}>
                     <p>{this.props.date}</p>
                  </div>
               </div>
            </div>
            <div id="E1Button" className="pt-2">
               <button
                  onClick={this.handleAddEvent}
                  type="button"
                  className="btn btn-secondary btn-sm"
               >
                  Add
               </button>
            </div>
         </div>
      );
   }
}
export default QVEvent;

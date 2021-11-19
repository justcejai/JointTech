import React, { Component } from "react";

class CalEvent extends Component {
   render() {
      return (
         <div id="Event1" className="p-3 d-flex justify-content-around">
            <div id="E1Body">
               <div id="E1Desc" className="">
                  {this.props.description}
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
                  onClick={this.props.hideEvent}
                  type="button"
                  className="btn btn-secondary btn-sm"
               >
                  Remove
               </button>
            </div>
         </div>
      );
   }
}
export default CalEvent;

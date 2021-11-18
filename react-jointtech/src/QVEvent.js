import React, { Component } from "react";

class QVEvent extends Component {
   constructor(props) {
      super(props);
      this.state = { hidden: true };
   }

   componentDidMount() {
      setTimeout(() => {
         this.setState({
            hidden: false,
         });
      }, this.props.wait);
   }

   render() {
      return this.state.hidden ? (
         " "
      ) : (
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
                  onClick={() => this.props.addEvent}
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

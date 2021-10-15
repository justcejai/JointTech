import React, { Component } from 'react';

class Card extends Component {
    render() { 
        return (
            <div className ="border border-3 border-dark" style={{width: "25%", backgroundColor: "#FFFFFF"}}>
                <div className="card-body" style={{padding: 0}}>
                    <div className="border-bottom border-3 border-dark" style={{backgroundColor: "#FF0000"}}>
                        <h3 id="card-title" className = "text-center text-white">{this.props.header}</h3>
                    </div>

                    <div id="card-content" style={{height:400}}></div>

                </div>
            </div>
        );
    }
}
 
export default Card;

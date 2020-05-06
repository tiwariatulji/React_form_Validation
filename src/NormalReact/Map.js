import React, { Component } from 'react';

class Map extends Component {
          constructor(props){
              super(props);
              this.state = {
                  list:[
                    {name:"Atul", email:"atul@gmil.com",add:"Ahemdabad"},
                    {name:"Rohii", email:"Djf@gmil.com",add:"Ahemdabad"},
                    {name:"Vishal", email:"addl@gmil.com",add:"ranchi"}
                  ]
              }
          }
          
    render() {
        const h2 ={
            color:"red",
            fontSize:"50px"
        }
        return (
            <div>
                <h1 style={h2}>Map In List</h1>
                {this.state.list.map((item)=>
                <div>
                    <span> Name:{item.name} Email: {item.email} Add:{item.add}</span>
                </div>
                )}
            </div>
        );
    }
}

export default Map;
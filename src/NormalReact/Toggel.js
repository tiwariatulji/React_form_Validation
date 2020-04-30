import React, { Component } from 'react';


class Toggel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:true,
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.show ? 
                    <h1>hide and Show</h1> :null
                }
            
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Me</button>
            </div>
        );
    }
}

export default Toggel;
import React, { Component } from 'react';

class ComponentUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active:null,
            who: null,
        }
        
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
        if(this.state.who==null){
            this.setState({who:"Atul"})
        }
        
    }
    render() {
        return (
            <div>
                <h1>react ComponentUpdate{this.state.who}</h1>
                <button onClick={()=>{this.setState({active:"yes"})}}>Click</button>
            </div>
        );
    }
}

export default ComponentUpdate;
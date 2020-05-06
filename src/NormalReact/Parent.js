
import React, { Component } from 'react';
import Child from "./Child"
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
        
    }
    handelClick=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <h1>Hello {this.state.count}</h1>
                <Child update={this.handelClick}/>
            </div>
        );
    }
}

export default Parent;
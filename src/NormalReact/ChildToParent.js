import React, { Component } from 'react';
import ChildData from "./ChildData"
class ChildToParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unit:"Kg"
        }
        
    }
    ChangeUnit(item){
        this.setState({unit:item})
    }
    render() {
        return (
            <div>
                <h1>It is Parent Data</h1>
                <ChildData data={{unit:this.state.unit,ChangeUnit:this.ChangeUnit.bind(this)}}/>
            </div>
        );
    }
}

export default ChildToParent;
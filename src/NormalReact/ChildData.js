import React, { Component } from 'react';

class ChildData extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.data.unit}</h3>
                <button onClick={()=>this.props.data.ChangeUnit("child unit")}>Chnage data Parent </button>
            </div>
        );
    }
}

export default ChildData;
import React, { Component } from 'react';
import Unmount1 from './Unmount1';

class Unmount extends Component {
    state={
        toggel:true
    }
    render() {
        return (
            <div>
                <h1>React ComponentWillUnmount</h1>
                {
                    this.state.toggel ? 
                    <Unmount1/> : null
                }
               <button onClick={()=>{this.setState({toggel:!this.state.toggel})}}>Click</button>
            </div>
        );
    }
}

export default Unmount;
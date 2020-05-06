import React, { Component } from 'react';

class Ref extends Component {
    constructor(props) {
        super(props);
        this.userRef = React.createRef()
    }
    Value(){
        // console.log(this.userRef)
        // this.userRef.current.focus()
        this.userRef.current.value="Atul tiwari"
    }
    render() {
        return (
            <div>
                <h1>React Ref Properties</h1>
              user:  <input  ref={this.userRef} type="text" name="user"/>
              <button onClick={()=>{this.Value()}}>Click here</button>
            </div>
        );
    }
}

export default Ref;
import React, { Component } from 'react';

class Unmount1 extends Component {


    componentWillUnmount(){
        alert("user has been deleted") 
    }
    render() {
        return (
            <div>
            <p>Hello Atul tiwari</p>
            <p>Eamil:atul@itservice</p>
            <p>Add. varansi</p>
            </div>
        );
    }
}

export default Unmount1;
import React, { Component } from 'react';
import{Button, Modal} from "react-bootstrap"
class Bootstrap extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:false
        }
        
    }
    handelClick=() =>{
        this.setState({show:!this.state.show})
    }
    render() {
        return (
            <div>
                <h1>Helo Bootstrap</h1>
                <button onClick={this.handelClick}>Click Me</button>
                <Modal show={this.state.show} hide={()=>this.handelClick()}>
                <Modal.Header CloseButton>Modal heading</Modal.Header>
                <Modal.Body>
                    Hello Every One
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>this.handelClick()}>Close</Button>
                    <Button onClick={()=>this.handelClick()}>Save</Button>
                </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Bootstrap;

import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:"Atul",
            email:"atultiwari15@gmail.com",
            count:0

        }
        
    }
    update(){
        this.setState({
            name:"Vipul",
            count:this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <h1>Normal State</h1>
                <h3>name:{this.state.name}</h3>
                <h3>email:{this.state.email}</h3>
                <h3>count:{this.state.count}</h3>
                <button onClick={()=>{this.update()}}>Click</button>
            </div>
        )
    }
}


import React, { Component } from 'react'

export default class FirstName extends Component {
    constructor(props) {
        super(props);
        this.state = {
           firstName :"Atul",
           lastName: "Tiwari"

        }
        
    }
    handleChange=(event)=> {
        console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value}) }


        valid(){
            if(this.state.firstName===""){
                alert("frist name is empaty")
            }
            else if (this.state.lastName===""){
                alert("last name is  empaty")
            }
            else {
                return true
            }
        }

        submit(){
            // const isValid = this.valid()
            if(this.valid()){
                console.log(this.state);
                alert("Form has been  submitted")
            }
        }
      
    render() {
        
        const {firstName,lastName} = this.state
        return (
            <div>
                <h1>Form Validation</h1>
                FirstName : <input type="text" name="firstName" value={firstName}  onChange={this.handleChange}/>
                lastName: <input type="text" name="lastName" value={lastName} onChange={this.handleChange}/>
                <button onClick={()=>this.submit()} >Submit</button>
            </div>
        )
    }
}

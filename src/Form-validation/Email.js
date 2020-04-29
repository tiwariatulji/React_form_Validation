import React, { Component } from 'react'

// const iState = {
//            name:"",
//             password:"",
//             nameError:"",
//             passwordError :""

// }

export default class Form1 extends Component {
    constructor(props) {
        super(props)
        this.state=
        {
            name:"",
            password:"",
            nameError:"",
            passwordError :""
        }
    }
    
    valid(){
        if(!this.state.name.includes("@")&& this.state.password.length<5)
        {
            this.setState({nameError:"invalid user id" ,passwordError:"password lenght should be more than 5"})
        }
        else if(!this.state.name.includes("@"))
        {
            this.setState({nameError:"invalid user id"})
        }
        else if(this.state.password.length<5)
        {
            this.setState({passwordError:"password lenght should be more than 5"})
        }
        else {
            return true;
        }
        
    }

   submit(){
       if(this.valid()){
        this.setState({nameError:"" ,passwordError:""})
        // this.setState(iState)
           alert("Form has been  submitted")
           console.log(this.state);
       }
   }
    
    render() {
        
        return (
            <div>
                <h1>Form Validation</h1>
                
                  UserName: <input type="text"  onChange={(event)=>{this.setState({name:event.target.value})}}/> <br/> <br/>
                  <p style={{color:"red",fontSize:"20px"}}>{this.state.nameError} </p>
                  Password : <input type="password"  onChange={(event)=>{this.setState({password:event.target.value})}}/>
                  <p style={{color:"red",fontSize:"20px"}}>{this.state.passwordError} </p>
                
                <button onClick={()=>this.submit()} >Submit</button>
            
            </div>
        )
    }
}
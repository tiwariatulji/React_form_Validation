import React, { Component } from 'react';

const error ={
    color: "red",
    fontSize:"20px"
}

class Api extends Component {
    state={
        user:[],
        errorMessage : "",
    }
    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2").then((resp)=>{
            resp.json().then((result)=>{
                console.log(result.data)
                this.setState({user:result.data})
            })
            .catch(error=>{
            
                this.setState({errorMessage:"data fecthing Error "})
            })
        })
    }
    render() {
        console.log(this.state)
        const {user,errorMessage} = this.state
        // console.log(user.length)
        return (
            <div>
                <h1>Api Data fetch </h1>
                {
                //    user.length ? 
                this.state.user ?
                      this.state.user.map((item,i)=>
                          <div>
                              <p>{i}---
                              Name:  {item.first_name}
                             LastName {item.last_name} ---
                              ---
                             Email: {item.email}                              
                              </p>
                          </div>
                      )
                    
                    :null
                }

                   {
                    errorMessage ? <div style={error}>{errorMessage}</div> : null
                    
                     }  
                
            </div>
        );
    }
}

export default Api;
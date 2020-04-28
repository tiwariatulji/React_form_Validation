import React, { Component } from 'react'
import RegisterForm from "./Form-validation/FormGroup/RegisterForm"
import Login from './Form-validation/LoginForm/Login'
export default class App extends Component {
  render() {
    return (
      <div>
      <h1>Hello</h1>
      {/* <RegisterForm/> */}
      <Login/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import RegisterForm from "./Form-validation/FormGroup/RegisterForm"
import Login from './Form-validation/LoginForm/Login'
import Email from './Form-validation/Email'
import FirstName from './Form-validation/Email/FirstName'
import NewForm from './Form-validation/Email/NewForm'
export default class App extends Component {
  render() {
    return (
      <div>
      <h1>Hello</h1>
      {/* <RegisterForm/> */}
      {/* <Login/> */}
      {/* <Email/> */}
      {/* <FirstName/> */}
      <NewForm/>
      </div>
    )
  }
}

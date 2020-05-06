import React, { Component } from 'react'
import RegisterForm from "./Form-validation/FormGroup/RegisterForm"
import Login from './Form-validation/LoginForm/Login'
import Email from './Form-validation/Email'
import FirstName from './Form-validation/Email/FirstName'
import NewForm from './Form-validation/Email/NewForm'
import LifeCycle from './NormalReact/LifeCycle'
import ComponentUpdate from './NormalReact/ComponentUpdate'
import Unmount from './NormalReact/Unmount'
import Map from "./NormalReact/Map"
import Api from './NormalReact/Api'
import Ref from './NormalReact/Ref'
import Bootstrap from "./NormalReact/Bootstrap"
import ErrorBoundary1 from "./NormalReact/ErrorBoundary/ErrorBoundary1"
import ErrorBound2 from './NormalReact/ErrorBoundary/ErrorBound2'
import ChildToParent from "./NormalReact/ChildToParent"
import Parent from './NormalReact/Parent'
export default class App extends Component {
  render() {
    return (
      <div>
      {/* <h1>Hello</h1> */}
      {/* <RegisterForm/> */}
      {/* <Login/> */}
      {/* <Email/> */}
      {/* <FirstName/> */}
       {/* <LifeCycle/>
       <ComponentUpdate/>
       <Unmount/>
       <Map/>
       <Api/>
       <Ref/> */}
       {/* <Bootstrap/> */}
       
       {/* <ErrorBound2>
       {/* <ErrorBoundary1/>
       </ErrorBound2> */}
       <ChildToParent/> 
       <Parent/>
    
      
      </div>
    )
  }
}

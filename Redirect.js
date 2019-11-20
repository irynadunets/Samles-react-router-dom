import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './App.css';

var validUser = false

const ValidateUser = () => {
    if(validUser){
        return <div>Welcome User</div>
    }
    else{
        return <Redirect to="/error"/>
    }
}

const Login = () => {
    validUser = true
    return <div>Logged In</div>
}

const Register = () => {
    validUser = false
    return <Redirect push to="/login"/> 
}

const Error = () => {
    return <div>Please Log In</div>
}

const App = () => (
  <BrowserRouter>
    <div>
<Switch>
<Route exact path="/user" render={ValidateUser}/>
<Route exact path="/error" render={Error}/>
<Route exact path="/login" render={Login}/>
<Route exact path="/register" render={Register}/>
<Redirect exact from='/' to='/user'/>
<Redirect from='/oldPageURL' to ='/newPageURL'/>
<Route component={Login}/>
</Switch>
    </div>
  </BrowserRouter>
);

export default App;

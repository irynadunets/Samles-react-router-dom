import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Prompt} from 'react-router-dom'
import './App.css';

const Login = () => {
    return <div>Logged In</div>
}

const Register = () => {
    return <div>Register</div>
}
var notSaved = true

const App = () => (
  <BrowserRouter>
    <div>
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
<Route exact path="/login" render={Login}/>
<Route exact path="/register" render={Register}/>
<Prompt when={notSaved} message="Are you sure you want to leave without saving?"/>
    </div>
  </BrowserRouter>
);

export default App;

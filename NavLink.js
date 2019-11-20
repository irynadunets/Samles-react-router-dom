import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css';

const Home = () => <div>Home</div>;
const About = (props) => {
  console.log(props.match)
  // Object {path: "/about", url: "/about", isExact: true, params: Object}
  console.log(props.location)
  // Object {pathname: "/about", search: "", hash: "", state: undefined}
  console.log(props.history)
  // Object {length: 1, action: "POP", location: Object}
  return (
    <div>
      About
    </div>
)}
const User = ({match}) => {
 return (
   <div>
     UserId: {match.params.id} //this will show the id entered in the URL path
   </div>
)}
const Info = ({match}) => {
  return (
    <div>
    <ul>
      <li>
        <NavLink to={match.url + '/phone'}>Phone</NavLink>{" "}
      </li>
      <li>
        <NavLink to={match.url + '/email'}>Email</NavLink>{" "}
      </li>
      <li>
        <NavLink to={match.url + '/address'}>Address</NavLink>{" "}
      </li>
    </ul>
    </div>
)}


var style = {color: 'red'}

const activeEvent = (match, location) => {
    if (!match) {
    return false
  }
    //do something
    console.log("active on : " + match.url)
}

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <NavLink exact to="/" isActive={activeEvent}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="selected" > About </NavLink>
        </li>
        <li>
          <NavLink strict to="/users" activeStyle={{color:'red'}}> Users</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/info" activeStyle={style}> Info </NavLink>
        </li>
      </ul>
      <hr />

      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" render={ ({match,location,history}) => {
        console.log(match)
        // Object {path: "/about", url: "/about", isExact: true, params: Object}
        console.log(location)
        // Object {pathname: "/about", search: "", hash: "", state: undefined}
        console.log(history)
        // Object {length: 1, action: "POP", location: Object}
        return (
          <div>About</div>
        )}
      }/>
      <Route path="/userId/:id" component = {User}/>
      <Route path="/info" component = {Info}/>
    </div>
  </BrowserRouter>
);

export default App;

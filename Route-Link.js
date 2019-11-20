import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
        <Link to={match.url + '/phone'}>Phone</Link>{" "}
      </li>
      <li>
        <Link to={match.url + '/email'}>Email</Link>{" "}
      </li>
      <li>
        <Link to={match.url + '/address'}>Address</Link>{" "}
      </li>
    </ul>
    </div>
)}


const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>{" "}
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
      <hr />
      <Link to="/a/b/c/d">Path</Link>
      <Link to="/#clothes">Hashtag</Link>
      <Link to="/items?id=123">Query</Link>
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

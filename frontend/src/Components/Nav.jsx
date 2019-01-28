import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <h1>I am a nav</h1>
        <ul>
            <NavLink exact to="/" onClick="refreshPage()" activeClassName="selected">
              <li className="active">Home</li>
            </NavLink>
            <NavLink exact to="/Tarifs" activeClassName="selected">
              <li>Tarifs Annonces</li>
            </NavLink>
            <NavLink exact to="/Login" activeClassName="selected">
              <li>Login</li>
            </NavLink>
            <NavLink exact to="/SignUp">
              <li>Signup</li>
            </NavLink>
            <NavLink exact to="/Contact">
              <li>Contact</li>
            </NavLink>
          </ul>
      </div>
    )
  }
}

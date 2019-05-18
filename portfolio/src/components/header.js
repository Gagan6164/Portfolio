import React, { Component } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div id="heade" className="heade">
        <span>
          <NavLink activeClassName="a" to="/">
            <span className="a"> Gagan Singh Saini </span>
          </NavLink>
        </span>
        <span id="nav" className="nav_array">
          <ul className="nav">
            <li id="home">
              <NavLink exact={true} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink id="about" to="/about">
                About
              </NavLink>
            </li>
            <li id="projects">
              <NavLink to="/projects"> projects </NavLink>
            </li>
            <li id="skills">
              <NavLink to="/skills"> Skills </NavLink>
            </li>
            <li id="contact">
              <NavLink to="/contact"> Contact </NavLink>
            </li>
          </ul>
        </span>
      </div>
    );
  }
}

export default withRouter(Header);

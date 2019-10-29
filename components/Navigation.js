import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav id="nav">
          <ul>
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#rules">Rules</a>
            </li>
            <li>
              <a href="#problemstatement">Problem Statements</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#getintouch">Get In Touch</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;

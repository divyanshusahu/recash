import React, { Component } from "react";
import logo from "../../assets/img/logo.svg";

class Header extends Component {
  render () {
    return (
      <header>
        <div className="navbar-fixed">
          <nav className="z-depth-0">
            <div className="nav-wrapper white">
              <div className="container">
                <a href="/" className="brand-logo">
                  <img src={logo} alt="" />
                </a>
                <ul className="right hide-on-med-and-down">
                  <li><a href="!#" className="grey-text text-darken-4">Location</a></li>
                  <li><a href="!#" className="grey-text text-darken-4">Login</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }  
}

export default Header;
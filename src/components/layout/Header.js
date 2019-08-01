import React, { Component } from "react";
import logo from "../../assets/img/logo.svg";
import "../../assets/css/Navbar.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="navbar-fixed">
          <nav className="z-depth-0">
            <div className="nav-wrapper white">
              <div className="navbar-container-width">
                <a href="/" className="brand-logo left">
                  <img src={logo} alt="" />
                </a>

                <ul className="right hide-on-med-and-down navbar_components">
                  <li>
                    <a href="!#" className="red-text">
                      HOME
                    </a>
                  </li>
                  <li>
                    <a href="!#" className="black-text">
                      HOW IT WORKS
                    </a>
                  </li>
                  <li>
                    <a href="!#" className="black-text">
                      CUSTOMER REVIEWS
                    </a>
                  </li>
                  <li>
                    <a href="!#" className="black-text">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="!#" className="black-text">
                      BLOG
                    </a>
                  </li>
                  <li>
                    <a href="!#" className="black-text">
                      BECOME OUR PARTNER
                    </a>
                  </li>
                  <li>
                    <a href="!#" className="black-text">
                      SERVICES
                    </a>
                  </li>
                  <li style={{ borderLeft: "1px solid rgba(0,0,0,0.2)", 
                               borderRight: "1px solid rgba(0,0,0,0.2)", 
                               fontWeight: "400"
                            }}>
                    <a href="!#" className="black-text">
                      <i className="material-icons left">location_on</i>
                      New Delhi
                      <i className="material-icons right">arrow_drop_down</i>
                    </a>
                  </li>
                  <li>
                    <a href="!#" className="blue-text">
                      <i className="material-icons left">phone</i>
                      1800-12345-2323
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;

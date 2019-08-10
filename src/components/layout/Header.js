import React, { Component } from "react";
import { connect } from "react-redux";
import { signupToggle } from "../../actions/signupToggleActions";

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
                    <span className="red-text">HOME</span>
                  </li>
                  <li>
                    <span className="black-text">HOW IT WORKS</span>
                  </li>
                  <li>
                    <span className="black-text">CUSTOMER REVIEWS</span>
                  </li>
                  <li>
                    <span className="black-text">FAQ</span>
                  </li>
                  <li>
                    <span className="black-text">BLOG</span>
                  </li>
                  <li>
                    <span className="black-text">BECOME OUR PARTNER</span>
                  </li>
                  <li>
                    <span className="black-text">SERVICES</span>
                  </li>
                  <li
                    style={{
                      borderLeft: "1px solid rgba(0,0,0,0.2)",
                      borderRight: "1px solid rgba(0,0,0,0.2)",
                      fontWeight: "400"
                    }}
                  >
                    <span className="black-text">
                      <i className="material-icons left">location_on</i>
                      New Delhi
                      <i className="material-icons right">
                        arrow_drop_down
                      </i>
                    </span>
                  </li>
                  <li style={{ borderRight: "1px solid rgba(0,0,0,0.2)" }}>
                    <span className="blue-text">
                      <i className="material-icons left">phone</i>
                      1800-12345-2323
                    </span>
                  </li>
                  <li onClick={() => this.props.signupToggle(false)}>
                    <span href="!#" className="black-text">
                      SIGN UP
                    </span>
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

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { signupToggle }
)(Header);

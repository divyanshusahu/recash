import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "../assets/css/SignUp.css";

import ill from "../assets/img/ill.svg";

class SignUp extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu right width={ '25%' }>
        <div className="container-fluid" style={{height: "100%"}}>
          <div className="row">
            <div className="col s12">
              <img src={ill} width="100%" alt="SignUp" />
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="card z-depth-0">
                <div className="card-content">
                  <span className="card-title">SIGN UP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    );
  }
}

export default SignUp;

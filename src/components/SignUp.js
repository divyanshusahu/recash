import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { connect } from "react-redux";
import { signupToggle } from "../actions/signupToggleActions";

import "../assets/css/SignUp.css";
import ill from "../assets/img/ill.svg";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(state) {
    if (!state.isOpen) {
      this.props.signupToggle(true);
    }
  }

  render() {
    var sidebar_width = "25%";
    if (window.innerWidth <= 600) {
      sidebar_width = "300px";
    }
    return (
      <Menu
        right
        width={sidebar_width}
        isOpen={this.props.isOpen.isOpen}
        onStateChange={state => this.handleStateChange(state)}
        customBurgerIcon={false}
      >
        <div className="container-fluid" style={{ height: "100%" }}>
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

const mapStateToProps = state => ({
  isOpen: state.signupToggle
});

export default connect(
  mapStateToProps,
  { signupToggle }
)(SignUp);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import axios from "axios";
import { signupToggle } from "../../actions/signupToggleActions";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";

import logo from "../../assets/img/logo.svg";
import "../../assets/css/Navbar.css";
import cities from "../../data/cities";
import Select from "react-select";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      isAuthenticated: false,
      user: "",
      draweropen: false,
      selected_city: "New Delhi"
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get("/api/me").then(res => {
      this.setState({
        isAuthenticated: res.data.status,
        user: res.data["account"]["phone"]
      });
    });
  }

  toggleDrawer(t) {
    this.setState({ draweropen: t });
  }

  handleChange(option) {
    this.setState({ selected_city: option.value});
  }

  render() {
    return (
      <Headroom>
        <header>
          <div className="">
            <nav className="z-depth-0">
              <div className="nav-wrapper white">
                <div className="navbar-container-width">
                  <a href="/" className="brand-logo left">
                    <img src={logo} alt="" />
                  </a>

                  <ul className="right hide-on-med-and-down navbar_components">
                    <li>
                      <Link to="/">
                        <span className="red-text">HOME</span>
                      </Link>
                    </li>
                    {/*<li>
                      <Link to="#how-it-works">
                        <span className="black-text">HOW IT WORKS</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#customers-review">
                        <span className="black-text">CUSTOMER REVIEWS</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#default_faq">
                        <span className="black-text">FAQ</span>
                      </Link>
                    </li>*/}
                    <li>
                      <Link to="/blog">
                        <span className="black-text">BLOG</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/become-a-partner">
                        <span className="black-text">BECOME OUR PARTNER</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#!">
                        <span className="black-text">SERVICES</span>
                      </Link>
                    </li>
                    <li
                      style={{
                        borderLeft: "1px solid rgba(0,0,0,0.2)",
                        borderRight: "1px solid rgba(0,0,0,0.2)",
                        fontWeight: "400"
                      }}
                      onClick={() => this.toggleDrawer(true)}
                    >
                      <Link to="#!">
                        <span className="black-text">
                          <i className="material-icons left">location_on</i>
                          {this.state.selected_city}
                          <i className="material-icons right">
                            arrow_drop_down
                          </i>
                        </span>
                      </Link>
                    </li>
                    <li style={{ borderRight: "1px solid rgba(0,0,0,0.2)" }}>
                      <Link to="#!">
                        <span className="blue-text">
                          <i className="material-icons left">phone</i>
                          1800-12345-2323
                        </span>
                      </Link>
                    </li>
                    <li onClick={() => this.props.signupToggle(false)}>
                      <Link to="#!">
                        <span className="black-text">
                          {this.state.isAuthenticated
                            ? this.state.user
                            : "SIGN UP"}
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <Drawer
                    anchor="top"
                    open={this.state.draweropen}
                    onClose={() => this.toggleDrawer(false)}
                  >
                    <div
                      style={{
                        padding: "2rem",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-around",
                        minHeight: "50vh"
                      }}
                    >
                      <Typography variant="h4" component="p" gutterBottom>
                        Select city
                      </Typography>
                      <Select
                        options={cities}
                        name="cities"
                        className="cities_select"
                        onChange={this.handleChange}
                      />
                    </div>
                  </Drawer>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </Headroom>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { signupToggle }
)(Header);

import React, { Component } from "react";
import Slider from "react-slick";
import FAQ from "../layout/FAQ";
import { Scrollbars } from "react-custom-scrollbars";
import axios from "axios";

import "../../assets/css/SellMobile.css";
//import mobiles from "../../data/phone_data";
import baba from "../../assets/img/baba.gif";

class SellMobiles extends Component {
  constructor() {
    super();
    this.state = {
      brand: "",
      model: "",
      variant: "",
      overall_condition: "",
      display_condition: "",
      old_device: "",
      other_issue: [],
      original_accesories_available: [],
      mobile_number: "",
      progress_bar_state: 0,
      data: {}
    };

    this.selected_phone_data = [];
    this.selected_phone_variant_data = [];

    this.gd_click = this.gd_click.bind(this);
    this.gd_mulClick = this.gd_mulClick.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.afterChangeHandler = this.afterChangeHandler.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "http://ec2-52-15-171-173.us-east-2.compute.amazonaws.com:3000/api/phone_data"
      )
      .then(res => {
        this.setState({ data: res.data });
      });
    //this.setState({ data: mobiles });
  }

  gd_click(key, id) {
    this.setState(prevState => {
      let newState = prevState;

      if (key === "brand") {
        newState = {
          brand: "",
          model: "",
          variant: "",
          overall_condition: "",
          display_condition: "",
          old_device: "",
          other_issue: [],
          original_accesories_available: [],
          mobile_number: "",
          progress_bar_state: 0
        };
        this.selected_phone_data = [];
        this.selected_phone_variant_data = [];
        for (let i = 0; i < this.state.data.mobiles.length; i++) {
          if (
            this.state.data.mobiles[i].brand.toLowerCase() === id.toLowerCase()
          ) {
            this.selected_phone_data = this.state.data.mobiles[i].phones;
            break;
          }
        }
      }

      if (key === "model") {
        for (let i = 0; i < this.selected_phone_data.length; i++) {
          if (
            this.selected_phone_data[i].model.toLowerCase() === id.toLowerCase()
          ) {
            this.selected_phone_variant_data = this.selected_phone_data[
              i
            ].variants;
            break;
          }
        }
      }

      newState[key] = id;
      setTimeout(() => this.slider.slickNext(), 500);
      return newState;
    });
  }

  gd_mulClick(key, id) {
    this.setState(prevState => {
      let newState = prevState;
      if (newState[key].indexOf(id) >= 0) {
        newState[key].splice(newState[key].indexOf(id), 1);
        return newState;
      }
      newState[key].push(id);
      return newState;
    });
  }

  prevSlide() {
    this.slider.slickPrev();
  }

  afterChangeHandler(currentSlide) {
    this.setState(prevState => {
      let newState = prevState;
      newState.progress_bar_state = currentSlide * 12.5;
      return newState;
    });
  }

  removeDotsPropagation(e) {
    e.stopPropagation();
  }

  render() {
    const progressBar = (
      <div>
        <div id="sell_progress_bar">
          <span className="baricon orange active" />
          <span
            id="progress_1"
            className="line_progress"
            style={{
              "--sell-progress": this.state.progress_bar_state.toString() + "%"
            }}
          />
          <span className="baricon orange" />
          <span id="progress_2" className="line_progress" />
          <span className="baricon orange" />
        </div>

        <div className="progressbar_info">
          <span>
            <span>01</span>
            <span>Gadget Details</span>
          </span>
          <span style={{ marginLeft: "20%" }}>
            <span>02</span>
            <span>Book Appointment</span>
          </span>
          <span style={{ marginLeft: "20%" }}>
            <span>03</span>
            <span>Sell Phone</span>
          </span>
        </div>
      </div>
    );

    const slider_settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    var mobile_data = [];
    try {
      mobile_data = this.state.data.mobiles.map(item => (
        <div
          className={
            "col s4 m3 brandsLogo " +
            (this.state.brand === item.brand ? "active" : null)
          }
          key={item.brand}
          onClick={() => this.gd_click("brand", item.brand)}
        >
          <img
            src={item.img}
            alt={item.brand}
            title={item.brand}
            width="90%"
            height="90%"
          />
        </div>
      ));
    } catch {
      // this can be empty
    }

    const gadget_details_1 = (
      <div id="gadget_details_1" className="gadget_detail">
        <div className="sell_phone_heading">
          <p>Enter Mobile Details and Get Instant Price</p>
          <span className="grey-text">Select Your Phone Brand</span>
        </div>
        <div id="selection1" className="selection">
          <Scrollbars style={{ height: "300px" }} autoHide>
            <div className="pseudoContainer">
              <div className="row">{mobile_data}</div>
            </div>
          </Scrollbars>
        </div>
      </div>
    );

    var phone_data;
    try {
      phone_data = this.selected_phone_data.map((item, index) => {
        return (
          <div className="col s6 m4" key={index}>
            <button
              className={
                "custom_button " +
                (this.state.model === item.model ? "active" : null)
              }
              onClick={() => this.gd_click("model", item.model)}
            >
              {item.model}
            </button>
          </div>
        );
      });
    } catch {
      // this can be empty
    }

    const gadget_details_2 = (
      <div id="gadget_details_2" className="gadget_detail">
        <div className="sell_phone_heading">
          <p>Select Phone Modal</p>
          <div id="selection2" className="selection">
            <Scrollbars style={{ height: "300px" }} autoHide>
              <div className="pseudoContainer">
                <div className="row">{phone_data}</div>
              </div>
            </Scrollbars>
          </div>
        </div>
      </div>
    );

    var variant_data;
    try {
      variant_data = this.selected_phone_variant_data.map((item, index) => {
        return (
          <div className="col s6 m5" key={index}>
            <button
              className={
                "custom_button " +
                (this.state.variant === item ? "active" : null)
              }
              onClick={() => this.gd_click("variant", item)}
            >
              {item}
            </button>
          </div>
        );
      });
    } catch {
      // this can be empty
    }

    const gadget_details_3 = (
      <div id="gadget_details_3" className="gadget_detail">
        <div className="sell_phone_heading">
          <p>Select Variant</p>
        </div>
        <div id="selection3" className="selection">
          <div className="row">{variant_data}</div>
        </div>
      </div>
    );

    const gadget_details_4 = (
      <div id="gadget_details_4" className="gadget_detail">
        <div className="sell_phone_heading">
          <p>Whats the overall condition of your device?</p>
        </div>
        <div id="selection4" className="selection">
          <div className="row">
            <div className="col s6 m5">
              <button
                className={
                  "custom_button " +
                  (this.state.overall_condition === "excellent"
                    ? "active"
                    : null)
                }
                onClick={() => this.gd_click("overall_condition", "excellent")}
              >
                Excellent
              </button>
            </div>
            <div className="col s6 m5 offset-m1">
              <button
                className={
                  "custom_button " +
                  (this.state.overall_condition === "very_good"
                    ? "active"
                    : null)
                }
                onClick={() => this.gd_click("overall_condition", "very_good")}
              >
                Very Good
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m5">
              <button
                className={
                  "custom_button " +
                  (this.state.overall_condition === "good" ? "active" : null)
                }
                onClick={() => this.gd_click("overall_condition", "good")}
              >
                Good
              </button>
            </div>
            <div className="col s6 m5 offset-m1">
              <button
                className={
                  "custom_button " +
                  (this.state.overall_condition === "fair" ? "active" : null)
                }
                onClick={() => this.gd_click("overall_condition", "fair")}
              >
                Fair
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    const gadget_details_5 = (
      <div id="gadget_details_5" className="gadget_detail">
        <div className="sell_phone_heading">
          <p>
            <i>Great!</i>
          </p>
          <p>Whats is the condition of your phone display?</p>
        </div>
        <div id="selection5" className="selection">
          <Scrollbars style={{ height: "300px" }} autoHide>
            <div className="pseudoContainer">
              <div className="row">
                <div className="col s12 m5">
                  <div
                    className={
                      "card " +
                      (this.state.display_condition === "good"
                        ? "active"
                        : null)
                    }
                    onClick={() => this.gd_click("display_condition", "good")}
                  >
                    <div className="card-content">
                      <span className="card-title">Good Display</span>
                      <ul>
                        <li>Touch Working</li>
                        <li>No Spots on Display</li>
                        <li>No Lines on Display</li>
                        <li>No Scratches</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col s12 m5 offset-m1">
                  <div
                    className={
                      "card " +
                      (this.state.display_condition === "faulty"
                        ? "active"
                        : null)
                    }
                    onClick={() => this.gd_click("display_condition", "faulty")}
                  >
                    <div className="card-content">
                      <span className="card-title">Faulty Display</span>
                      <ul>
                        <li>Touch Faulty</li>
                        <li>Screen Cacked</li>
                        <li>Heavy Scratches</li>
                        <li>Visible Lines</li>
                        <li>Display Discoloration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Scrollbars>
        </div>
      </div>
    );

    const gadget_details_6 = (
      <div id="gadget_details_6" className="gadget_detail">
        <div className="sell_phone_heading">
          <p>How old is your device?</p>
        </div>
        <div id="selection6" className="selection">
          <div className="row">
            <div className="col s6 m5">
              <button
                className={
                  "custom_button " +
                  (this.state.old_device === "b3" ? "active" : null)
                }
                onClick={() => this.gd_click("old_device", "b3")}
              >
                Below 3 months
              </button>
            </div>
            <div className="col s6 m5 offset-m1">
              <button
                className={
                  "custom_button " +
                  (this.state.old_device === "b3t6" ? "active" : null)
                }
                onClick={() => this.gd_click("old_device", "b3t6")}
              >
                3 <span className="hide-on-small-only">months</span> - 6 months
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m5">
              <button
                className={
                  "custom_button " +
                  (this.state.old_device === "b6t11" ? "active" : null)
                }
                onClick={() => this.gd_click("old_device", "b6t11")}
              >
                6 <span className="hide-on-small-only">months</span> - 11 months
              </button>
            </div>
            <div className="col s6 m5 offset-m1">
              <button
                className={
                  "custom_button " +
                  (this.state.old_device === "m11" ? "active" : null)
                }
                onClick={() => this.gd_click("old_device", "m11")}
              >
                Above 11 months
              </button>
            </div>
          </div>
          <div className="sell_phone_heading" style={{ marginTop: "50px" }}>
            <p className="grey-text">Bill & Warranty card needed.</p>
          </div>
        </div>
      </div>
    );

    const gadget_details_7 = (
      <div id="gadget_details_7" className="gadget_detail">
        <div className="sell_phone_heading">
          <p>
            <i>Voila!</i>
          </p>
          <p>Any other issues with your device?</p>
        </div>
        <div id="selection7" className="selection">
          <Scrollbars style={{ height: "300px" }} autoHide>
            <div className="pseudoContainer">
              <div className="row">
                <div className="col s6 m5">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("headphone_port_issue") >=
                      0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "headphone_port_issue")
                    }
                  >
                    Headphone Port Issue
                  </button>
                </div>
                <div className="col s6 m5 offset-m1">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("back_camera_issue") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "back_camera_issue")
                    }
                  >
                    Back Camera Issue
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col s6 m5">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("battery_issue") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "battery_issue")
                    }
                  >
                    Battery Issue
                  </button>
                </div>
                <div className="col s6 m5 offset-m1">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("button_issue") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "button_issue")
                    }
                  >
                    Button Issue
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col s6 m5">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("wireless_issue") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "wireless_issue")
                    }
                  >
                    Wifi/Bluetooth Issue
                  </button>
                </div>
                <div className="col s6 m5 offset-m1">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("charging_issue") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "charging_issue")
                    }
                  >
                    Charging Issue
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col s6 m5">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("sensors_issue") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "sensors_issue")
                    }
                  >
                    Any Sensor Issue
                  </button>
                </div>
                <div className="col s6 m5 offset-m1">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("front_camera_issue") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "front_camera_issue")
                    }
                  >
                    Front Camera Issue
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col s8 m4">
                  <button
                    className="custom_action_button"
                    onClick={() => this.slider.slickNext()}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </Scrollbars>
        </div>
      </div>
    );

    const gadget_details_8 = (
      <div id="gadget_details_8" className="gadget_detail">
        <div className="sell_phone_heading">
          <p>Please select the original accesories which are available?</p>
        </div>
        <div id="selection8" className="selection">
          <div className="row">
            <div className="col s6 m5">
              <button
                className={
                  "custom_button " +
                  (this.state.original_accesories_available.indexOf(
                    "charger"
                  ) >= 0
                    ? "active"
                    : null)
                }
                onClick={() =>
                  this.gd_mulClick("original_accesories_available", "charger")
                }
              >
                Charger
              </button>
            </div>
            <div className="col s6 m5 offset-m1">
              <button
                className={
                  "custom_button " +
                  (this.state.original_accesories_available.indexOf(
                    "earphone"
                  ) >= 0
                    ? "active"
                    : null)
                }
                onClick={() =>
                  this.gd_mulClick("original_accesories_available", "earphone")
                }
              >
                Earphones
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m5">
              <button
                className={
                  "custom_button " +
                  (this.state.original_accesories_available.indexOf("bill") >= 0
                    ? "active"
                    : null)
                }
                onClick={() =>
                  this.gd_mulClick("original_accesories_available", "bill")
                }
              >
                Valid Bill
              </button>
            </div>
            <div className="col s6 m5 offset-m1">
              <button
                className={
                  "custom_button " +
                  (this.state.original_accesories_available.indexOf("box") >= 0
                    ? "active"
                    : null)
                }
                onClick={() =>
                  this.gd_mulClick("original_accesories_available", "box")
                }
              >
                Box
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="input-field">
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" className="validate" />
                <label htmlFor="icon_telephone">Mobile Number</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s8 m4">
              <button className="custom_action_button">Get Price</button>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div id="landing">
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col s12 m6 offset-m1">
                {progressBar}

                <div id="sell_phone">
                  <span onClick={this.prevSlide} style={{ cursor: "pointer" }}>
                    <i className="material-icons">arrow_back</i>
                  </span>
                  <Slider
                    ref={c => (this.slider = c)}
                    {...slider_settings}
                    afterChange={this.afterChangeHandler}
                  >
                    <div className="sliders_div">{gadget_details_1}</div>
                    <div className="sliders_div">{gadget_details_2}</div>
                    <div className="sliders_div">{gadget_details_3}</div>
                    <div className="sliders_div">{gadget_details_4}</div>
                    <div className="sliders_div">{gadget_details_5}</div>
                    <div className="sliders_div">{gadget_details_6}</div>
                    <div className="sliders_div">{gadget_details_7}</div>
                    <div className="sliders_div">{gadget_details_8}</div>
                    <div className="sliders_div">
                      <div id="book_appointment">
                        <p>Book appoinment</p>
                      </div>
                    </div>
                    <div className="sliders_div">
                      <div id="sell_phone">
                        <p>Sell Phone</p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="col s12 m5 hide-on-small-only">
                <img src={baba} alt="baba" width="100%" />
              </div>
            </div>
          </div>
        </section>

        <div className="homepage_div_break">
          <div className="container">
            <FAQ />
          </div>
        </div>
      </div>
    );
  }
}

export default SellMobiles;

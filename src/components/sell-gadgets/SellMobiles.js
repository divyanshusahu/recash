import React, { Component } from "react";
import Slider from "react-slick";
import FAQ from "../layout/FAQ";
import { Scrollbars } from "react-custom-scrollbars";
import axios from "axios";
import Swal from "sweetalert2";
import ReactModal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../../assets/css/SellMobile.css";
import mobiles from "../../data/phone_data";
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
      progress_bar_state_2: 0,
      data: {},
      isAddressModalOpen: false,
      date: new Date()
    };

    this.selected_phone_data = [];
    this.selected_phone_variant_data = [];
    this.selected_mobile_image = "";

    this.gd_click = this.gd_click.bind(this);
    this.gd_mulClick = this.gd_mulClick.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.afterChangeHandler = this.afterChangeHandler.bind(this);
    this.createGetPriceRequest = this.createGetPriceRequest.bind(this);
    this.getPrice = this.getPrice.bind(this);
    this.openAddressModal = this.openAddressModal.bind(this);
    this.closeAddressModal = this.closeAddressModal.bind(this);
    this.handleAddressSubmit = this.handleAddressSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/phone_data")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(() => {
        this.setState({ data: mobiles });
      });

    ReactModal.setAppElement("#root");
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
          progress_bar_state: 0,
          selected_mobile_image: ""
        };
        this.selected_phone_data = [];
        this.selected_phone_variant_data = [];
        this.selected_mobile_image = "";
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
            this.selected_mobile_image = this.selected_phone_data[i].img;
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
      if (currentSlide === 9) {
        newState.progress_bar_state_2 = 100;
      } else {
        newState.progress_bar_state = currentSlide * 12.5;
        newState.progress_bar_state_2 = 0;
      }
      return newState;
    });
  }

  removeDotsPropagation(e) {
    e.stopPropagation();
  }

  createGetPriceRequest() {
    var post_data = {
      company: this.state.brand,
      model: this.state.model,
      body: this.state.overall_condition,
      warranty: this.state.old_device,
      "turn-on-off": this.state.display_condition
    };

    this.state.other_issue.map(item => {
      return (post_data[item] = "faulty");
    });

    this.state.original_accesories_available.map(item => {
      return (post_data[item] = "present");
    });

    axios.post("/api/get_price", post_data).then(res => {
      this.setState({
        calculated_price: res.data.price,
        itemId: res.data.search_id
      });
    });
  }

  getPrice() {
    if (this.state.mobile_number && this.state.mobile_number.length >= 10) {
      axios
        .get(
          "http://ec2-52-15-171-173.us-east-2.compute.amazonaws.com:3000/api/me"
        )
        .then(res => {
          if (res.data.status) {
            this.createGetPriceRequest();
            setTimeout(() => this.slider.slickNext(), 500);
          } else {
            axios
              .post("/api/user/login", {
                phone: this.state.mobile_number
              })
              .then(res => {
                Swal.fire({
                  title: "OTP Verification",
                  input: "text",
                  inputAttributes: {
                    autocapitalize: "off"
                  },
                  text:
                    "Plese enter the six digit OTP that was sent to your mobile",
                  showCancelButton: true,
                  confirmButtonText: "Submit",
                  showLoaderOnConfirm: true,
                  preConfirm: otp => {
                    return axios
                      .post("/api/user/verifyotp", { otp: otp })
                      .then(res => {
                        return res.data;
                      });
                  },
                  allowOutsideClick: () => !Swal.isLoading()
                }).then(result => {
                  if (result.value) {
                    if (result.value.status) {
                      Swal.fire({
                        title: "Success",
                        type: "success",
                        text: "Login Successful"
                      });
                      this.createGetPriceRequest();
                      setTimeout(() => this.slider.slickNext(), 1000);
                    } else {
                      Swal.fire({
                        title: "OTP Verification",
                        type: "error",
                        text: result.value.message
                      });
                    }
                  }
                });
              })
              .catch(() => {
                Swal.fire({
                  title: "Oops!",
                  text: "Something went wrong! Please try again.",
                  type: "error"
                });
              });
          }
        });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid ten digits mobile number",
        type: "error"
      });
    }
  }

  openAddressModal() {
    this.setState({ isAddressModalOpen: true });
  }

  closeAddressModal() {
    this.setState({ isAddressModalOpen: false });
  }

  handleAddressSubmit(e) {
    e.preventDefault();

    let post_data = {
      flat_number: this.state.user_house_no,
      locality: this.state.user_locality,
      landmark: this.state.user_landmark,
      pincode: this.state.user_pincode,
      city: this.state.user_city
    };
    axios.post("/api/me/address/new", post_data).then(res => {});
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
          <span
            id="progress_2"
            className="line_progress"
            style={{
              "--sell-progress-2":
                this.state.progress_bar_state_2.toString() + "%"
            }}
          />
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
      arrows: false,
      adaptiveHeight: false
    };

    var mobile_data = [];
    try {
      mobile_data = this.state.data.mobiles.map(item => (
        <div
          className={
            "col s4 m3 l2 brandsLogo " +
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
          <Scrollbars style={{ height: "350px" }} autoHide>
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
            <Scrollbars style={{ height: "350px" }} autoHide>
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
                  (this.state.overall_condition === "good" ? "active" : null)
                }
                onClick={() => this.gd_click("overall_condition", "good")}
              >
                Good
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m5">
              <button
                className={
                  "custom_button " +
                  (this.state.overall_condition === "average" ? "active" : null)
                }
                onClick={() => this.gd_click("overall_condition", "average")}
              >
                Average
              </button>
            </div>
            <div className="col s6 m5 offset-m1">
              <button
                className={
                  "custom_button " +
                  (this.state.overall_condition === "below_average"
                    ? "active"
                    : null)
                }
                onClick={() =>
                  this.gd_click("overall_condition", "below_average")
                }
              >
                Below Average
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
          {/*<Scrollbars style={{ height: "300px" }} autoHide>*/}
          <div className="pseudoContainer">
            <div className="row">
              <div className="col s12 m5">
                <div
                  className={
                    "card " +
                    (this.state.display_condition === "on" ? "active" : null)
                  }
                  onClick={() => this.gd_click("display_condition", "on")}
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
              <div className="col s12 m5 offset-m2">
                <div
                  className={
                    "card " +
                    (this.state.display_condition === "off" ? "active" : null)
                  }
                  onClick={() => this.gd_click("display_condition", "off")}
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
          {/*</Scrollbars>*/}
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
                  (this.state.old_device === "<3" ? "active" : null)
                }
                onClick={() => this.gd_click("old_device", "<3")}
              >
                Below 3 months
              </button>
            </div>
            <div className="col s6 m5 offset-m1">
              <button
                className={
                  "custom_button " +
                  (this.state.old_device === "3-6" ? "active" : null)
                }
                onClick={() => this.gd_click("old_device", "3-6")}
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
                  (this.state.old_device === "6-10" ? "active" : null)
                }
                onClick={() => this.gd_click("old_device", "6-10")}
              >
                6 <span className="hide-on-small-only">months</span> - 10 months
              </button>
            </div>
            <div className="col s6 m5 offset-m1">
              <button
                className={
                  "custom_button " +
                  (this.state.old_device === ">10" ? "active" : null)
                }
                onClick={() => this.gd_click("old_device", ">10")}
              >
                Above 10 months
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
          <Scrollbars style={{ height: "450px" }} autoHide>
            <div className="pseudoContainer">
              <div className="row">
                <div className="col s6 m5">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("headphone_port") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "headphone_port")
                    }
                  >
                    Headphone Port
                  </button>
                </div>
                <div className="col s6 m5 offset-m1">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("rear_camera") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "rear_camera")
                    }
                  >
                    Rear Camera
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col s6 m5">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("front_camera") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "front_camera")
                    }
                  >
                    Front Camrea
                  </button>
                </div>
                <div className="col s6 m5 offset-m1">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("battery") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() => this.gd_mulClick("other_issue", "battery")}
                  >
                    Battery
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col s6 m5">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("charging") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() => this.gd_mulClick("other_issue", "charging")}
                  >
                    Charging
                  </button>
                </div>
                <div className="col s6 m5 offset-m1">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("fingerprint") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "fingerprint")
                    }
                  >
                    Fingerprint
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col s6 m5">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("microphone") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "microphone")
                    }
                  >
                    Microphone
                  </button>
                </div>
                <div className="col s6 m5 offset-m1">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("wifi") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() => this.gd_mulClick("other_issue", "wifi")}
                  >
                    Wifi
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col s6 m5">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("gps") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() => this.gd_mulClick("other_issue", "gps")}
                  >
                    GPS
                  </button>
                </div>
                <div className="col s6 m5 offset-m1">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("bluetooth") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() => this.gd_mulClick("other_issue", "bluetooth")}
                  >
                    bluetooth
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col s6 m5">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("speaker") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() => this.gd_mulClick("other_issue", "speaker")}
                  >
                    speaker
                  </button>
                </div>
                <div className="col s6 m5 offset-m1">
                  <button
                    className={
                      "custom_button " +
                      (this.state.other_issue.indexOf("other_sensor") >= 0
                        ? "active"
                        : null)
                    }
                    onClick={() =>
                      this.gd_mulClick("other_issue", "other_sensor")
                    }
                  >
                    other sensor
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6 l4">
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
                <input
                  id="icon_telephone"
                  type="tel"
                  className="validate"
                  onChange={event => {
                    this.setState({ mobile_number: event.target.value });
                  }}
                />
                <label htmlFor="icon_telephone">Mobile Number</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l4">
              <button className="custom_action_button" onClick={this.getPrice}>
                Get Price
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    const gadget_details_9 = (
      <div id="book_appointment">
        <div className="sell_phone_heading">
          <p>
            <i>Great!</i> The quote is 10% higher than last month.
          </p>
        </div>
        <div className="pseudoContainer">
          <div className="row">
            <div className="col s12 m8">
              <div className="container-fluid">
                <div className="bookAppointmentNavbar">
                  <div className="row">
                    <div className="col s4" />
                  </div>
                </div>
              </div>
              <div className="card horizontal">
                <div className="card-image">
                  <img
                    src={this.selected_mobile_image}
                    alt={this.state.model}
                    title={this.state.model}
                  />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <span className="card-title" style={{ fontWeight: "500" }}>
                      {this.state.model}, {this.state.variant}
                    </span>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col s8">
                          <p className="grey-text text-darken-1">Device Life</p>
                        </div>
                        <div className="col s4">
                          <p>{this.state.old_device}</p>
                        </div>
                        <div className="col s8">
                          <p className="grey-text text-darken-1">
                            Display Condition
                          </p>
                        </div>
                        <div className="col s4">
                          <p>{this.state.display_condition}</p>
                        </div>
                        <div className="col s8">
                          <p className="grey-text text-darken-1">
                            Overall Condition
                          </p>
                        </div>
                        <div className="col s4">
                          <p>{this.state.overall_condition}</p>
                        </div>
                        <div className="col s12">
                          <p>Acessories Available</p>
                          <p>{this.state.original_accesories_available}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-content">
                  <span
                    className="card-title"
                    style={{
                      fontWeight: "500"
                    }}
                  >
                    Price Breakup
                  </span>
                  <hr />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col s8">
                        <p className="grey-text text-darken-1">Offer Price</p>
                      </div>
                      <div className="col s4">
                        <p>{this.state.calculated_price}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s8">
                        <p className="grey-text text-darken-1">
                          Pickup Charges
                        </p>
                      </div>
                      <div className="col s4">
                        <p className="red-text">FREE</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col s8">
                        <p className="grey-text text-darken-1">Total</p>
                      </div>
                      <div className="col s4">
                        <p>
                          <b>{this.state.calculated_price}</b>
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col s12">
                        <p>Have a coupon code?</p>
                        <input
                          type="text"
                          placeholder="ENTER CODE"
                          style={{ width: "60%" }}
                        />
                        <button
                          className="custom_button"
                          style={{ float: "right" }}
                        >
                          Apply
                        </button>
                        <button
                          className="custom_action_button"
                          style={{
                            width: "100%",
                            margin: "1rem 0"
                          }}
                          onClick={() => this.slider.slickNext()}
                        >
                          Sell Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const gadget_details_10 = (
      <div id="sell_phone">
        <div className="pseudoContainer">
          <div className="row">
            <div className="col s12 m8">
              <div className="card">
                <div className="card-content">
                  <div id="add_address">
                    <button
                      className="custom_button"
                      onClick={this.openAddressModal}
                    >
                      Add New Address
                    </button>
                    <ReactModal
                      isOpen={this.state.isAddressModalOpen}
                      onRequestClose={this.closeAddressModal}
                      shouldCloseOnOverlayClick={true}
                      style={{
                        overlay: {
                          backgroundColor: "rgba(0,0,0,0.5)"
                        },
                        content: {
                          backgroundColor: "#fff",
                          maxWidth: "80vw",
                          width: "800px",
                          margin: "auto",
                          height: "600px",
                          padding: "2.5rem"
                        }
                      }}
                    >
                      <p>Add Address</p>
                      <form
                        noValidate
                        autoComplete="off"
                        onSubmit={this.handleAddressSubmit}
                      >
                        <div className="input-field">
                          <input
                            type="text"
                            id="user_house_number"
                            className="validate"
                            onChange={event => {
                              this.setState({
                                user_house_no: event.target.value
                              });
                            }}
                          />
                          <label htmlFor="user_house_number">
                            House No.
                          </label>
                        </div>
                        <div className="input-field">
                          <input
                            type="text"
                            id="user_locality"
                            className="validate"
                            onChange={event => {
                              this.setState({
                                user_locality: event.target.value
                              });
                            }}
                          />
                          <label htmlFor="user_locality">Locality</label>
                        </div>
                        <div className="input-field">
                          <input
                            type="text"
                            id="user_landmark"
                            className="validate"
                            onChange={event => {
                              this.setState({
                                user_landmark: event.target.value
                              });
                            }}
                          />
                          <label htmlFor="user_landmark">Landmark</label>
                        </div>
                        <div className="input-field">
                          <input
                            type="text"
                            id="user_city"
                            className="validate"
                            onChange={event => {
                              this.setState({
                                user_city: event.target.value
                              });
                            }}
                          />
                          <label htmlFor="user_city">City</label>
                        </div>
                        <div className="input-field">
                          <input
                            type="number"
                            id="user_pincode"
                            className="validate"
                            onChange={event => {
                              this.setState({
                                user_pincode: event.target.value
                              });
                            }}
                          />
                          <label htmlFor="user_pincode">Pincode</label>
                        </div>
                        <button
                          type="submit"
                          className="custom_action_button"
                          style={{ width: "200px", padding: "0.2rem" }}
                        >
                          SAVE
                        </button>
                      </form>
                    </ReactModal>
                    <div className="card">
                      <div className="card-content" />
                    </div>
                  </div>
                  <div id="select_date">
                    <div className="">
                      <i className="material-icons prefix">date_range</i>
                      <DatePicker
                        selected={this.state.date}
                        onChange={date => {
                          this.setState({ date: date });
                        }}
                        dateFormat="dd/MM/yyyy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col s8">
                        <p>Quote Locked</p>
                      </div>
                      <div className="col s4">
                        <p>{this.state.calculated_price}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
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
              <div className="col s12 m8 offset-m2">
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
                    <div className="sliders_div">{gadget_details_9}</div>
                    <div className="sliders_div">{gadget_details_10}</div>
                  </Slider>
                </div>
              </div>
              <div className="col s12 m5 hide">
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

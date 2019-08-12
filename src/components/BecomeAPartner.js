import React, { Component } from "react";
import Slider from "react-slick";

import FAQ from "./layout/FAQ";
import "../assets/css/BAP.css";
import csolution1 from "../assets/icon/csolution1.png";
import csolution2 from "../assets/icon/csolution2.png";
import csolution3 from "../assets/icon/csolution3.png";
import csolution4 from "../assets/icon/csolution4.png";
import csolution5 from "../assets/icon/csolution5.png";
import csolution6 from "../assets/icon/csolution6.png";
import csolution7 from "../assets/icon/csolution7.png";
import csolution8 from "../assets/icon/csolution8.png";

class BecomeAPartner extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 10000,
      cssEase: "linear"
    };

    return (
      <div id="become-a-partner" style={{ marginTop: "2rem" }}>
        <div className="container-fluid">
          <div id="bap-landing">
            <div className="bap-landing-overlay">
              <div className="bap-landing-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col s12 m4 offset-m1">
                      <div>
                        <p className="white-text main-heading">
                          Phone Khareedo.
                        </p>
                        <p className="white-text main-heading">
                          Bharose ke saath.
                        </p>
                        <p className="white-text sub-heading">
                          Become our partner and change the refurbished phone
                          industry
                        </p>
                      </div>
                    </div>
                    <div className="col s12 m4 offset-m2">
                      <div id="bap-landing-register">
                        <div className="card z-depth-0">
                          <div className="card-content">
                            <span className="sub-heading">
                              Register today to transform the used mobile
                              industry.
                            </span>
                            <form>
                              <div className="row">
                                <div className=" input-field col s6">
                                  <div className="bap-custom-inputs">
                                    <input
                                      type="text"
                                      placeholder="Full Name"
                                      name="name"
                                    />
                                  </div>
                                </div>
                                <div className=" input-field col s6">
                                  <div className="bap-custom-inputs">
                                    <input
                                      type="number"
                                      placeholder="Pin Code"
                                      name="pincode"
                                    />
                                  </div>
                                </div>
                                <div className=" input-field col s6">
                                  <div className="bap-custom-inputs">
                                    <input
                                      type="tel"
                                      placeholder="Mobile Number"
                                      name="mobile_number"
                                    />
                                  </div>
                                </div>
                                <div className=" input-field col s6">
                                  <div className="bap-custom-inputs">
                                    <input
                                      type="email"
                                      placeholder="Email"
                                      name="email"
                                    />
                                  </div>
                                </div>
                                <div className=" input-field col s12">
                                  <div className="bap-custom-inputs">
                                    <input
                                      type="text"
                                      placeholder="Dealership Name"
                                      name="dealership_name"
                                    />
                                  </div>
                                </div>
                                <div className=" input-field col s12">
                                  <button
                                    type="submit"
                                    className="custom_action_button"
                                    style={{ width: "100%", margin: 0 }}
                                  >
                                    Register Now
                                  </button>
                                </div>
                              </div>
                            </form>
                            <p className="grey-text">
                              We respect your privacy. Your information is
                              confidential with us.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="bap-landing2" className="homepage_div_break">
          <div style={{ width: "90%", margin: "auto" }}>
            <div className="row">
              <div className="col s12 m4">
                <div className="card z-depth-0 center">
                  <div className="card-content">
                    <p className="sub-sub-heading">
                      Wide Assortment of Phones.
                    </p>
                    <p className="grey-text text-darken-2">
                      Choose from a large pool of preowned smartphones.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card z-depth-0 center">
                  <div className="card-content">
                    <p className="sub-sub-heading">
                      Verified devices with bill.
                    </p>
                    <p className="grey-text text-darken-2">
                      All phones have a verified billor wonership details.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card z-depth-0 center">
                  <div className="card-content">
                    <p className="sub-sub-heading">
                      Transparent bidding process.
                    </p>
                    <p className="grey-text text-darken-2">
                      We ensure fair and easy bidding process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="bap-landing3" className="homepage_div_break">
          <div className="container">
            <p className="sub-main-heading center grey-text text-darken-2">
              We help you with a complete solution
            </p>
            <div className="row">
              <div className="col s6 m3">
                <div className="card z-depth-0 center">
                  <div className="csolution-card-image">
                    <img
                      src={csolution1}
                      alt="Designated Account Manager"
                      title="Designated Account Manager"
                    />
                  </div>
                  <div className="card-content">
                    <p>
                      <b>Designated Account Manager</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col s6 m3">
                <div className="card z-depth-0 center">
                  <div className="csolution-card-image">
                    <img
                      src={csolution2}
                      alt="Amazing Reward Schemes"
                      title="Amazing Reward Schemes"
                    />
                  </div>
                  <div className="card-content">
                    <p>
                      <b>Amazing Reward Schemes</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col s6 m3">
                <div className="card z-depth-0 center">
                  <div className="csolution-card-image">
                    <img
                      src={csolution3}
                      alt="Hassle Free Payment"
                      title="Easy payment and Delivery Process"
                    />
                  </div>
                  <div className="card-content">
                    <p>
                      <b>Hassle Free Payment & Delivery Process.</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col s6 m3">
                <div className="card z-depth-0 center">
                  <div className="csolution-card-image">
                    <img
                      src={csolution4}
                      alt="Free Home Delivery"
                      title="Free Home Delivery"
                    />
                  </div>
                  <div className="card-content">
                    <p>
                      <b>Free Home Delivery with documents</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6 m3">
                <div className="card z-depth-0 center">
                  <div className="csolution-card-image">
                    <img
                      src={csolution5}
                      alt="Platform to sell phones"
                      title="Platform to sell phones"
                    />
                  </div>
                  <div className="card-content">
                    <p>
                      <b>Platform to sell phones</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col s6 m3">
                <div className="card z-depth-0 center">
                  <div className="csolution-card-image">
                    <img
                      src={csolution6}
                      alt="Flexible bidding"
                      title="Flexible bidding"
                    />
                  </div>
                  <div className="card-content">
                    <p>
                      <b>No limit to bidding in phone auctions</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col s6 m3">
                <div className="card z-depth-0 center">
                  <div className="csolution-card-image">
                    <img
                      src={csolution7}
                      alt="Verified Bill"
                      title="Verified Bill"
                    />
                  </div>
                  <div className="card-content">
                    <p>
                      <b>All mobile</b>
                    </p>
                    <p>
                      <b>Only with verified bill</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col s6 m3">
                <div className="card z-depth-0 center">
                  <div className="csolution-card-image">
                    <img
                      src={csolution8}
                      alt="Unnatl Financing"
                      title="Unnatl Financing"
                    />
                  </div>
                  <div className="card-content">
                    <p>
                      <b>Unnatl Financing Options</b>
                    </p>
                    <p>
                      <b>( Coming Soon )</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="bap-landing4" className="homepage_div_break">
          <div className="container">
            <p className="sub-main-heading center grey-text text-darken-2">
              Hear from Our Partners
            </p>
            <Slider {...settings}>
              <div>
                <div className="card small">
                  <div className="card-content">
                    <p>
                      I am now able to buy lot of different models and have
                      quadruppled my business with reCash. I spend 5-6 hours a
                      day bidding on reCash channel partner app.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card small">
                  <div className="card-content">
                    <p>2</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card small">
                  <div className="card-content">
                    <p>3</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div id="bap-landing5" className="homepage_div_break">
          <div className="container-fluid">
            <div className="landing5-image">
              <div className="bap-landing-overlay">
                <div className="bap-landing-content center">
                  <div className="container">
                    <p className="main-heading white-text">
                      Phone Khareedo Bharose ke saath.
                    </p>
                    <p className="main-heading white-text">
                      Ready to Partner with reCash.
                    </p>
                    <button className="custom_action_button">
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="faq" className="homepage_div_break">
          <div className="container">
            <FAQ />
          </div>
        </div>
      </div>
    );
  }
}

export default BecomeAPartner;

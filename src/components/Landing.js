import React, { Component } from "react";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import FAQ from "./layout/FAQ";

import "../assets/css/Landing.css";
import smartphone from "../assets/icon/smartphone.svg";
import ipad from "../assets/icon/ipad.svg";
import macbook from "../assets/icon/macbook.svg";
import ps4 from "../assets/icon/ps4.svg";
import gameController from "../assets/icon/gameController.svg";
import bestPrice from "../assets/icon/bestPrice.svg";
import scooter from "../assets/icon/scooter.svg";
import purse from "../assets/icon/purse.svg";
import baba from "../assets/img/baba.gif";

class Landing extends Component {
  render() {
    const slider_settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true
    };

    return (
      <div id="home" className="homepage_div_break">
        <div className="container">
          <div className="row">
            <div className="col s12 m8">
              <p className="main-heading">
                Sell your{" "}
                <TextLoop
                  className="red-text"
                  children={["Mobile", "Laptop", "Tablet", "Games", "Consoles"]}
                />{" "}
                Quickly.
              </p>
              <p className="sub-heading grey-text text-darken-1">
                Free doorstep pickup. Instant cash.
              </p>
              <div id="searchdiv">
                <div className="nav-wrapper">
                  <form>
                    <div className="input-field">
                      <input
                        id="search"
                        type="search"
                        required
                        placeholder="Search your device"
                      />
                      <label className="label-icon" htmlFor="search">
                        <i className="material-icons">search</i>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <p className="sub-sub-heading grey-text">
                Or choose a category to continue
              </p>
            </div>
          </div>

          <div id="categories" className="homepage_div_break">
            <div className="row">
              <div className="col s4 m2">
                <Link to="/sell-mobiles">
                  <div className="custom-card">
                    <img
                      src={smartphone}
                      alt="smartphone"
                      title="smartphone"
                      width="100%"
                      height="150px"
                    />
                    <p>Mobile</p>
                  </div>
                </Link>
              </div>
              <div className="col s4 m2">
                <div className="custom-card">
                  <img
                    src={macbook}
                    alt="Laptop"
                    title="Laptop"
                    width="100%"
                    height="150px"
                  />
                  <p>Laptop</p>
                </div>
              </div>
              <div className="col s4 m2">
                <div className="custom-card">
                  <img
                    src={ipad}
                    alt="Tablet"
                    title="Tablet"
                    width="100%"
                    height="150px"
                  />
                  <p>Tablet</p>
                </div>
              </div>
              <div className="col s4 m2">
                <div className="custom-card">
                  <img
                    src={gameController}
                    alt="Game"
                    title="Game"
                    width="100%"
                    height="150px"
                  />
                  <p>Games</p>
                </div>
              </div>
              <div className="col s4 m2">
                <div className="custom-card">
                  <img
                    src={ps4}
                    alt="Consoles"
                    title="Consoles"
                    width="100%"
                    height="150px"
                  />
                  <p>Consoles</p>
                </div>
              </div>
              <div className="col s4 m2">
                <div className="custom-card">
                  <p>More</p>
                </div>
              </div>
            </div>
          </div>

          <div id="how-it-works" className="homepage_div_break">
            <p className="main-heading">How reCash works?</p>
            <p className="sub-sub-heading grey-text text-darken-2">
              Sell your gadget same day! Here's what our mobile selling process
              looks like
            </p>
            <div className="row">
              <div className="col s12 m4">
                <div className="card z-depth-3">
                  <div className="row">
                    <div className="col s3">
                      <img src={bestPrice} alt="Best Price" width="100%" />
                    </div>
                    <div className="col s9">
                      <p style={{ fontSize: "1.4rem" }}>
                        Get Price
                        <span style={{ float: "right" }}>
                          <button className="btn-floating waves-effect waves-light white red-text">
                            1
                          </button>
                        </span>
                      </p>
                      <p className="grey-text">
                        Answer a few simple questions. Unlock the best selling
                        price for your mobile.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card z-depth-3">
                  <div className="row">
                    <div className="col s3">
                      <img src={scooter} alt="Scooter" width="100%" />
                    </div>
                    <div className="col s9">
                      <p style={{ fontSize: "1.4rem" }}>
                        Book a Pickup
                        <span style={{ float: "right" }}>
                          <button className="btn-floating waves-effect waves-light white red-text">
                            2
                          </button>
                        </span>
                      </p>
                      <p className="grey-text">
                        Choose a time & location and we'll come pick it up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card z-depth-3">
                  <div className="row">
                    <div className="col s3">
                      <img src={purse} alt="Wallet" width="100%" />
                    </div>
                    <div className="col s9">
                      <p style={{ fontSize: "1.4rem" }}>
                        Get Paid
                        <span style={{ float: "right" }}>
                          <button className="btn-floating waves-effect waves-light white red-text">
                            3
                          </button>
                        </span>
                      </p>
                      <p className="grey-text">
                        Get paid at your doorstep via your preferred payment
                        mode.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 offset-m2 hide-on-small-only">
                <img src={baba} alt="custom_gif" width="100%" />
              </div>
            </div>
          </div>

          <div id="customers-review" className="homepage_div_break">
            <p className="sub-heading">Happy Customers</p>
            <p className="paragraph grey-text text-darken-3">
              Happy you = Happy us! here's what our customers have to say about
              their experience of selling their gadgets to reCash.
            </p>
            <div className="container-fluid" style={{ padding: "0rem" }}>
              <Slider {...slider_settings}>
                <div>
                  <div className="card z-depth-1">
                    <div className="card-content">1</div>
                  </div>
                </div>
                <div>
                  <div className="card z-depth-1">
                    <div className="card-content">2</div>
                  </div>
                </div>
                <div>
                  <div className="card z-depth-1">
                    <div className="card-content">3</div>
                  </div>
                </div>
                <div>
                  <div className="card z-depth-1">
                    <div className="card-content">4</div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div id="blog" className="homepage_div_break">
            <p className="main-heading">Latest Articles by reCash Blog</p>
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "lightgrey"
              }}
            />
          </div>

          <div id="faq" className="homepage_div_break">
            <FAQ />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

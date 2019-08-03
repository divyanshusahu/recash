import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@material-ui/core/Button";

import "../assets/css/Landing.css";
import mobiles from "../data/mobile_list";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      brand: "",
      model: "",
      variant: "",
      overall_condition: "",
      display_condition: "",
      old_device: "",
      other_issue: "",
      original_accesories_available: "",
      mobile_number: ""
    };

    this.gd1_click = this.gd1_click.bind(this);
  }

  gd1_click() {
    this.setState(prevState => {
      let newState = prevState;
      newState.brand = "id";
      return newState;
    });
  }

  render() {
    const slider_settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    const gridListTile = mobiles.map(item => (
      <GridListTile
        key={item.brand}
        cols={1}
        style={{ cursor: "pointer" }}
        onClick={this.gd1_click}
      >
        <img src={item.img} alt={item.brand} />
      </GridListTile>
    ));

    const gadget_details_1 = (
      <div id="gadget_deatils">
        <div className="sell_phone_heading">
          <p>Enter Mobile Details and Get Instant Price</p>
          <span>Select Your Phone Brand</span>
        </div>
        <div id="selection1" className="selection">
          <div className="gridlist_root">
            <GridList cellHeight={100} className="gridlist" cols={5}>
              {gridListTile}
            </GridList>
          </div>
        </div>
      </div>
    );

    const gadget_details_2 = (
      <div id="gadget_details_2">
        <div className="sell_phone_heading">
          <p>Select Phone Modal</p>
        </div>
      </div>
    );

    const gadget_details_3 = (
      <div id="gadget_details_3">
        <div className="sell_phone_heading">
          <p>Select Varient</p>
        </div>
        <div id="selection3" className="selection">
          <div className="row">
            <div className="col s6 m3">
              <Button variant="outlined">16 GB</Button>
            </div>
            <div className="col s6 m3">
              <Button variant="outlined">64 GB</Button>
            </div>
          </div>
        </div>
      </div>
    );

    const gadget_details_4 = (
      <div id="gadget_details_4">
        <div className="sell_phone_heading">
          <p>Whats the overall condition of your device?</p>
        </div>
        <div id="selection4" className="selection">
          <div className="row">
            <div className="col s6 m3">
              <Button variant="outlined">Excellent</Button>
            </div>
            <div className="col s6 m3">
              <Button variant="outlined">Very Good</Button>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m3">
              <Button variant="outlined">Good</Button>
            </div>
            <div className="col s6 m3">
              <Button variant="outlined">Fair</Button>
            </div>
          </div>
        </div>
      </div>
    );

    const gadget_details_5 = (
      <div id="gadget_details_5">
        <div className="sell_phone_heading">
          <p>
            <i>Great!</i>
          </p>
          <p>Whats is the condition of your phone display?</p>
        </div>
      </div>
    );

    const gadget_details_6 = (
      <div id="gadget_details_6">
        <div className="sell_phone_heading">
          <p>How old is your device?</p>
        </div>
        <div id="selection6" className="selection">
          <div className="row">
            <div className="col s6 m3">
              <Button variant="outlined">Below 3 months</Button>
            </div>
            <div className="col s6 m3">
              <Button variant="outlined">3 months - 6 months</Button>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m3">
              <Button variant="outlined">6 months - 11 months</Button>
            </div>
            <div className="col s6 m3">
              <Button variant="outlined">Above 11 months</Button>
            </div>
          </div>
          <div className="sell_phone_heading" style={{ marginTop: "50px" }}>
            <p className="grey-text">Bill & Warranty card needed.</p>
          </div>
        </div>
      </div>
    );

    const gadget_details_7 = (
      <div id="gadget_details_7">
        <div className="sell_phone_heading">
          <p>
            <i>Voila!</i>
          </p>
          <p>Any other issues with your device?</p>
        </div>
        <div id="selection7" className="selection">
          <div className="row">
            <div className="col s6 m3">
              <Button variant="outlined">Headphone Port Issue</Button>
            </div>
            <div className="col s6 m3">
              <Button variant="outlined">Back Camera Issue</Button>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m3">
              <Button variant="outlined">Battery Issue</Button>
            </div>
            <div className="col s6 m3">
              <Button variant="outlined">Button Issue</Button>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m3">
              <Button variant="outlined">Wifi/Bluetooth Issue</Button>
            </div>
            <div className="col s6 m3">
              <Button variant="outlined">Charging Issue</Button>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m3">
              <Button variant="outlined">Any Sensor Issue</Button>
            </div>
            <div className="col s6 m3">
              <Button variant="outlined">Front Camera Issue</Button>
            </div>
          </div>
          <div className="row">
            <div className="col s8 m4">
              <Button
                variant="contained"
                size="large"
                className="orange white-text"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    );

    const gadget_details_8 = (
      <div id="gadget_details_8">
        <div className="sell_phone_heading">
          <p>Please select the original accesories which are available?</p>
        </div>
        <div id="selection8" className="selection">
          <div className="row">
            <div className="col s6 m3">
              <Button variant="outlined">Charger</Button>
            </div>
            <div className="col s6 m3">
              <Button variant="outlined">Earphones</Button>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m3">
              <Button variant="outlined">Valid Bill</Button>
            </div>
            <div className="col s6 m3">
              <Button variant="outlined">Box</Button>
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
              <Button
                variant="contained"
                size="large"
                className="orange white-text"
              >
                Get Price
              </Button>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div id="landing">
        <section>
          <div className="container">
            <div>
              <div id="sell_progress_bar" className="center">
                <span className="baricon orange" />
                <span
                  id="progress_1"
                  className="line_progress"
                  style={{ "--sell-progress": "10%" }}
                />
                <span className="baricon orange" />
                <span id="progress_2" className="line_progress" />
                <span className="baricon orange" />
              </div>

              <div id="sell_phone">
                <Slider {...slider_settings}>
                  {gadget_details_1}
                  {gadget_details_2}
                  {gadget_details_3}
                  {gadget_details_4}
                  {gadget_details_5}
                  {gadget_details_6}
                  {gadget_details_7}
                  {gadget_details_8}
                  <div id="book_appointment">
                    <p>Book appoinment</p>
                  </div>
                  <div id="sell_phone">
                    <p>Sell Phone</p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;

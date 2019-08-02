import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import "../assets/css/Landing.css";
import mobiles from "../data/mobile_list";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      "brand": "",
      "model": "",
      "variant": "",
      "overall_condition": "",
      "display_condition": "",
      "old_device": "",
      "other_issue": "",
      "original_accesories_available": "",
      "mobile_number": ""
    };
  }

  render() {
    const gridListTile = mobiles.map(item => <GridListTile key={item.brand} cols={1}
    style={{cursor:"pointer"}}>
      <img src={item.img} alt={item.brand} />
    </GridListTile> )
    return (
      <div id="landing">
        <section>
          <div className="container">
            <div>
              <div id="sell_progress_bar" className="center">
                <span className="baricon orange" />
                <span id="progress_1" className="line_progress" />
                <span className="baricon orange" />
                <span id="progress_2" className="line_progress" />
                <span className="baricon orange" />
              </div>

              <div id="sell_phone">
                <div id="gadget_deatils">
                  <div className="sell_phone_heading">
                    <p>Enter Mobile Details and Get Instant Price</p>
                    <span>Select Your Phone Brand</span>
                  </div>
                  <div id="select_phone_div" style={{marginTop: "20px"}}>
                    <div className="gridlist_root">
                      <GridList
                        cellHeight={100}
                        className="gridlist"
                        cols={5}
                      >
                        {gridListTile}
                      </GridList>
                    </div>
                  </div>
                </div>
                <div id="book_appointment" />
                <div id="sell_phone" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;

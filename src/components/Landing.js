import React, { Component } from "react";

import "../assets/css/Landing.css";

class Landing extends Component {

  render() {
    return (
      <div id="landing">
        <section>
          <div className="container">
            <div className="center">
              <div id="sell_progress_bar">
                <span className="baricon orange"></span>
                <span id="progress_1" className="line_progress"></span>
                <span className="baricon orange"></span>
                <span id="progress_2" className="line_progress"></span>
                <span className="baricon orange"></span>
              </div>
              <div id="gadget_deatils">
                
              </div>
              <div id="book_appointment">

              </div>
              <div id="sell_phone">

              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store";

import "./assets/css/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/Landing";
import SellMobiles from "./components/sell-gadgets/SellMobiles";
import SignUp from "./components/SignUp";
import BecomeAPartner from "./components/BecomeAPartner";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="wrapper">
          <SignUp />
          <Header />
	  <Switch>
		  <Route exact path="/" component={Landing} />
		  <Route exact path="/become-a-partner" component={BecomeAPartner} />
		  <Route exact path="/blog" component={() => window.location = 'https://recash.in/blog'} />
		  <Route path="/sell-mobiles" component={SellMobiles} />
          </Switch>
	  <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

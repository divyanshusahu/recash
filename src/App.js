import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import "./assets/css/App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <SignUp />
        <Header />
        <Landing />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

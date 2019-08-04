import React from "react";

import "./assets/css/App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="wrapper">
      <SignUp />
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;

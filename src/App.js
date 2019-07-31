import React from 'react';

import './assets/css/App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/Landing';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;

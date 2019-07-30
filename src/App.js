import React from 'react';
import './assets/css/App.css';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <SignUp />
      <Header />
      <Footer />
    </div>
  );
}

export default App;

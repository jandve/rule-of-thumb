import React from 'react';
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AsideTop from "./components/aside/AsideTop";
import AsideBottom from "./components/aside/AsideBottom";

function App() {
  return (
    <div className="App">
      <Header />
      <AsideTop />
      <AsideBottom />
      <Footer/>
    </div>
  );
}

export default App;

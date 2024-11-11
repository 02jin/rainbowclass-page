import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"
import './styles/App.css';  

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Placeholder components with new design
const About = () => (
  <div className="page-container">
    <h1>About Us</h1>
    <p>회사 소개 내용이 들어갈 자리입니다.</p>
  </div>
);
const Services = () => (
  <div className="page-container">
    <h1>Our Services</h1>
    <p>서비스 내용이 들어갈 자리입니다.</p>
  </div>
);
const Contact = () => (
  <div className="page-container">
    <h1>Contact Us</h1>
    <p>연락처 정보가 들어갈 자리입니다.</p>
  </div>
);

export default App;
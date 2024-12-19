import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"
import './styles/App.css';  
import Introduction from "./pages/Introduction";
import Announcement from "./pages/Announcement";
import MainActivity from "./pages/MainActivity";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/mainactivity" element={<MainActivity />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

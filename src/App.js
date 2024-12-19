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
            <Route path="./pages/Home.js" element={<Home />} />
            <Route path="./pages/Announcement.js" element={<Announcement />} />
            <Route path="./pages/Introduction.js" element={<Introduction />} />
            <Route path="./pages/MainActivity.js" element={<MainActivity />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
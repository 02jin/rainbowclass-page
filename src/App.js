import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import './styles/App.css';  

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/main-activities" element={<MainActivities />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/free-board" element={<FreeBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

// Placeholder components
const Home = () => <div>홈 페이지</div>;
const Introduction = () => <div>소개 페이지</div>;
const MainActivities = () => <div>주요활동 페이지</div>;
const Announcements = () => <div>공지사항 페이지</div>;
const FreeBoard = () => <div>자유게시판 페이지</div>;

export default App;
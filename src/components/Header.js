import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../assets/logo.png';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#eeeeee',
    padding: '30px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };

  const bannerStyle = {
    width: '450px',  
    height: 'auto',
  };

  const navStyle = {
    display: 'flex',
    gap: '35px',
    marginRight: '50px',
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor:'white',
    padding: '5px 16px',  // 상하 8px, 좌우 16px의 패딩 추가
    transition: 'background-color 0.3s', 
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <img src={Banner} alt="무지개청춘교실 로고" style={bannerStyle} />
      </div>
      <nav style={navStyle}>
        <Link to="/introduction" style={linkStyle}>소개</Link>
        <Link to="/main-activities" style={linkStyle}>주요활동</Link>
        <Link to="/announcements" style={linkStyle}>공지사항</Link>
        <Link to="/free-board" style={linkStyle}>자유게시판</Link>
      </nav>
    </header>
  );
};

export default Header;
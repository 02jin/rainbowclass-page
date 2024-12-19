import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-[#2B2D42] text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Digital Agency Logo" className="h-8" />
        </Link>
        
        <nav className="flex gap-8 items-center">
          <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
          <Link to="../pages/Introduction.js" className="hover:text-blue-300 transition-colors">소개</Link>
          <Link to="../pages/Announcement.js" className="hover:text-blue-300 transition-colors">공지사항</Link>
          <Link to="../pages/MainActivity.js" className="hover:text-blue-300 transition-colors">주요활동</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

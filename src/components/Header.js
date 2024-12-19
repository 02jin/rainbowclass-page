import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col items-center">
          {/* 로고 섹션 */}
          <Link to="/" className="flex items-center mb-4">
            <img 
              src={Logo} 
              alt="무지개청춘교실 로고" 
              className="h-16"
            />
            
          </Link>
          
          {/* 네비게이션 메뉴 */}
          <nav className="w-full max-w-xl">
            <ul className="flex justify-between items-center">
              <li>
                <Link 
                  to="/" 
                  className="text-lg hover:text-blue-500 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/introduction" 
                  className="text-lg hover:text-blue-500 transition-colors duration-200"
                >
                  소개
                </Link>
              </li>
              <li>
                <Link 
                  to="/announcement" 
                  className="text-lg hover:text-blue-500 transition-colors duration-200"
                >
                  공지사항
                </Link>
              </li>
              <li>
                <Link 
                  to="/mainactivity" 
                  className="text-lg hover:text-blue-500 transition-colors duration-200"
                >
                  주요활동
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

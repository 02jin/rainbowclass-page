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
          <Link to="/about" className="hover:text-blue-300 transition-colors">About</Link>
          <Link to="/services" className="hover:text-blue-300 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
          <Link to="/quote" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md transition-colors">
            REQUEST QUOTE
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

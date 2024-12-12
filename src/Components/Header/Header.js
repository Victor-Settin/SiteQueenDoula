import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi'; // Ícones de menu
import './Header.css';
import logo from '../../Images/logo-turtle.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-header">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
          exact
        >
          Home
        </NavLink>
        <NavLink 
          to="/gallery" 
          className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
        >
          Photos Gallery
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
        >
          Contact Us
        </NavLink>
      </nav>
      <div className="social-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram size={26} color="#a2c037" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook size={26} color="#a2c037" />
        </a>
      </div>

    </header>
  );
};

export default Header;

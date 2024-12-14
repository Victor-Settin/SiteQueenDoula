import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
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
        {/* Linha curvada abaixo do logo */}
        <div className="curved-line-container-1">
          <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" className="curved-line">
            <path d="M 0 20 Q 50 10, 100 20" stroke="#a1cf4a" fill="transparent" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <HiX size={30} color="#a2c037" /> : <HiMenu size={30} color="#a2c037" />}
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

      {/* Linha curvada antes das redes sociais */}
    <div className="curved-line-container-2">
      <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" className="curved-line-2">
        <path d="M 0 50 Q 100 20, 200 50" stroke="#a1cf4a" fill="transparent" strokeWidth="1" />
      </svg>
    </div>


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

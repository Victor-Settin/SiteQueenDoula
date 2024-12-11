import React from 'react';
import { NavLink } from 'react-router-dom'; // Importando NavLink
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Header.css';
import logo from '../../Images/logo-teste.avif';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-header">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
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
          Photos Galerry
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
          <FaInstagram size={26} color="#E4405F" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook size={26} color="#1877F2" />
        </a>
      </div>
    </header>
  );
};

export default Header;

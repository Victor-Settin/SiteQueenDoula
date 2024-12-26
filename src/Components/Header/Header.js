import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import './Header.css';
import logo from '../../Images/header-logo-3.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook para detectar mudanças de rota

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fechar o menu automaticamente quando a rota mudar
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]); // Quando a localização mudar (i.e., quando a rota mudar), fecha o menu

  return (
    <header className="header">
      <div className="logo-header">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-pc" />
          <img src={logo} alt="Logo" className="logo-mobile" />
        </NavLink>
        {/* Linha curvada abaixo do logo */}
        <div className="curved-line-container-1">
          <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" className="curved-line">
            <path d="M 0 20 Q 50 10, 100 20" stroke="#a1cf4a" fill="transparent" strokeWidth="1" />
          </svg>
        </div>
      </div>    

      <div className="menu-icon" onClick={toggleMenu}>
  <div className="menu-icon-wrapper">
    {isMenuOpen ? <HiX /> : <HiMenu />}
  </div>
</div>


      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
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

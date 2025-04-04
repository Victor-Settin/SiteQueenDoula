import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import './Header.css';
import logoTurtle from '../../assets/Images/logo_turtle_v1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para rolar suavemente até a seção com ajuste de 100 pixels acima
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Posição do elemento
      const elementPosition = element.offsetTop;
      
      // Calculando a posição final com o deslocamento
      const offsetPosition = elementPosition - 100;

      // Rolando suavemente até a posição ajustada
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Fecha o menu após a navegação
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="content-header">
      <div className="box-header">
        <NavLink to="/" className="logo-link">
            <img src={logoTurtle} alt="LogoTurle" className="logo-turtle" />
          <div className="log-text">
            Purple Turtle Doula & Nanny Services
          </div>
        </NavLink>
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
        <div onClick={() => scrollToSection('about')} className="nav-link">
          About Me
        </div>
        <div onClick={() => scrollToSection('gallery')} className="nav-link">
          Photos Gallery
        </div>
        <div onClick={() => scrollToSection('contact')} className="nav-link">
          Contact Us
        </div>
        <div onClick={() => scrollToSection('reviews')} className="nav-link">
          Reviews
        </div>
      </nav>

      <div className="curved-line-container-2">
        <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" className="curved-line-2">
          <path d="M 0 50 Q 100 20, 200 50" stroke="#a1cf4a" fill="transparent" strokeWidth="1" />
        </svg>
      </div>

      {/* <div className="social-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram size={26} color="#a2c037" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook size={26} color="#a2c037" />
        </a>
      </div> */}
      </div>
    </header>
  );
};

export default Header;
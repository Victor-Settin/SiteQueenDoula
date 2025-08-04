import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import './Header.css';
import logoTurtle from '../../assets/Images/logo_turtle_v1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (target) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(target), 100); // Espera carregamento da home
    } else {
      scrollToSection(target);
    }
  };

  return (
    <header className="header">
      <div className="content-header">
        <div className="box-header">
          <NavLink to="/" className="logo-link">
            <img src={logoTurtle} alt="Logo Turtle" className="logo-turtle" />
            <div className="log-text">Purple Turtle Doula & Nanny Services</div>
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
          <div onClick={() => handleNavigation('about')} className="nav-link">About Me</div>
          <div onClick={() => handleNavigation('gallery')} className="nav-link">Photos Gallery</div>
          <div onClick={() => handleNavigation('contact')} className="nav-link">Contact Us</div>
          <div onClick={() => handleNavigation('reviews')} className="nav-link">Reviews</div>
          <NavLink to="/blog" onClick={() => setIsMenuOpen(false)} className="nav-link">Blog</NavLink>
        </nav>

        <div className="curved-line-container-2">
          <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" className="curved-line-2">
            <path d="M 0 50 Q 100 20, 200 50" stroke="#a1cf4a" fill="transparent" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;

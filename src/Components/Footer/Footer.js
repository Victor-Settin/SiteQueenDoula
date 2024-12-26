import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Navegação no Footer */}
      <div className="footer-navigation">
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/success">Success</Link></li>
        </ul>
      </div>
      
      {/* Informações de Contato */}
      <div className="footer-contact">
        <p>Contact us at: <a href="mailto:raquel@turtlepurple.com">raquel@turtlepurple.com</a></p>
        <p>Location: San Mateo, CA</p>
      </div>
      
      {/* Copyright */}
      <p>Copyright &copy; {new Date().getFullYear()} turtlenewbornchildcare.com - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

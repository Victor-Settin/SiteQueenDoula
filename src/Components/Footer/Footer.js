import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
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

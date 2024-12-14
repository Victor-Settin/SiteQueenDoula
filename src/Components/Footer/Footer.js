import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      {/* Redes sociais */}
      <div className="footer-social-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram size={26} color="#a2c037" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook size={26} color="#a2c037" />
        </a>
      </div>

      {/* Localização */}
      <div className="footer-location">
        <p>Location: 1234 Some Street, City, Country</p>
      </div>

      {/* Copyright */}
      <p>&copy; {new Date().getFullYear()} By Victor Settin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

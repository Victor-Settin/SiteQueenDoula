import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">


      {/* Localização */}
      <div className="footer-location">
        <p>Location: San Mateo, CA</p>
      </div>

      {/* Copyright */}
      <p>&copy; {new Date().getFullYear()} By Victor Settin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

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
      <p>Copyright &copy; {new Date().getFullYear()} turtlenewbornchildcare.com - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

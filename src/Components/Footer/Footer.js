import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Informações de Contato */}
      <div className="footer-contact">
        <p>Contact us at: <a href="mailto:raquel@purpleturtleservices.com">raquel.martins@purpleturtleservices.com</a></p>
        <p>Location: Daly City, CA 94014</p>
      </div>
      
      {/* Copyright */}
      <p>Copyright &copy; {new Date().getFullYear()} www.purpleturtlecare.com - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Importando o ícone de home
import './Success.css';

const Success = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleGoHome = () => {
    navigate('/'); // Navega para a página inicial
  };

  return (
    <div className="success-container">
      <h1>Message Sent Successfully!</h1>
      <p>Thank you for reaching out. I'll get back to you soon.</p>
      <button onClick={handleGoHome} className="custom-button">
        <FaHome style={{ marginRight: '8px' }} /> Go Back to Home
      </button>
    </div>
  );
};

export default Success;

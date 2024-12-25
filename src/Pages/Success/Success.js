import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleGoHome = () => {
    navigate('/'); // Navega para a página inicial
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Message Sent Successfully!</h1>
      <p>Thank you for reaching out. I'll get back to you soon.</p>
      <button
        onClick={handleGoHome}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#29344e',
          color: '#a2c037',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Success;

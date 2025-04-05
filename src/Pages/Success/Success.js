import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './Success.css';

const Success = () => {
  const navigate = useNavigate();

  const handleGoHome = () => navigate('/');

  return (
    <div className="success-container">
      <h1>Message Sent Successfully!</h1>
      <p>Thank you for reaching out. I'll get back to you soon.</p>
      <p>
        Want to see more? <a href="/gallery" style={{ color: '#a2c037' }}>Check out our gallery</a>.
      </p>
      <button onClick={handleGoHome} className="custom-button">
        <FaHome style={{ marginRight: '8px' }} /> Go Back to Home
      </button>
    </div>
  );
};

export default Success;
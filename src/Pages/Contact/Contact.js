import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Função para atualizar o campo ao digitar
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Atualiza os dados do formulário
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Validação em tempo real
    if (value.trim() !== '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''  // Limpa o erro correspondente ao campo preenchido
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação
    let formErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      formErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName) {
      formErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is not valid';
      isValid = false;
    }

    if (!formData.phone) {
      formErrors.phone = 'Phone number is required';
      isValid = false;
    }

    if (!formData.message) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);

    if (isValid) {
      // Simula o envio do formulário
      console.log('Form submitted successfully', formData);
      navigate('/success'); // Redireciona para a página de sucesso
    }
  };

  return (
    <div className="contact-container">
      <div className="title-contact">
        <div className="title">Contact Us</div>
        <div className="subtitle">We'd love to hear from you</div>
      </div>
      

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`input-field ${errors.firstName ? 'error' : ''}`}
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`input-field ${errors.lastName ? 'error' : ''}`}
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-field ${errors.email ? 'error' : ''}`}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`input-field ${errors.phone ? 'error' : ''}`}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`input-field ${errors.message ? 'error' : ''}`}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

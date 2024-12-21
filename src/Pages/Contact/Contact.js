import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from 'emailjs-com';
import * as yup from 'yup';
import './Contact.css';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-hot-toast'; // Importando o toast do react-hot-toast

// Esquema de validação Yup
const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format. Example: user@example.com'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/^[0-9]{10,15}$/, 'Phone must be a valid number'),
  message: yup.string().required('Message is required'),
  terms: yup.bool().oneOf([true], 'You must agree to the terms and conditions'),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    // Log para depuração
    console.log('Form Data Submitted:', data);

    // Enviar dados para o template do EmailJS
    emailjs
      .send(
        'ServiceIDRaquel', // Seu service ID
        'Tamplate-Site-Raquel', // Seu template ID
        {
          firstName: data.firstName,   // Envia o primeiro nome
          lastName: data.lastName,     // Envia o sobrenome
          email: data.email,           // Envia o email
          phone: data.phone,           // Envia o telefone
          message: data.message,       // Envia a mensagem
        },
        'V1SwNnfO9IA43jdeT' // Sua chave pública
      )
      .then(
        (response) => {
          // Notificação de sucesso
          toast.success('Message sent successfully!', {
            duration: 3000, // Duração do popup
            style: {
              backgroundColor: '#4CAF50', // Cor de fundo verde (sucesso)
              color: 'white', // Cor do texto
            },
          });
          console.log('Email sent successfully:', response);
          reset();
        },
        (error) => {
          // Notificação de erro
          toast.error('Failed to send message. Please try again.', {
            duration: 3000, // Duração do popup
            style: {
              backgroundColor: '#f44336', // Cor de fundo vermelha (erro)
              color: 'white', // Cor do texto
            },
          });
          console.log('Error sending email:', error);
        }
      );
  };

  return (
    <div className="contact-container">
      <motion.div
        className="title-contact"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="title">Contact Me</div>
        <div className="subtitle">I'd love to hear from you!</div>
      </motion.div>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit(onSubmit)}  // O onSubmit é chamado aqui
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="forms">
          <div className="form-left">
            <div className={`form-group ${errors.firstName ? 'error' : ''}`}>
              <input
                type="text"
                id="first-name"
                className="input-field"
                {...register('firstName')}
              />
              <label htmlFor="first-name">First Name</label>
              {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
            </div>
            <div className={`form-group ${errors.lastName ? 'error' : ''}`}>
              <input
                type="text"
                id="last-name"
                className="input-field"
                {...register('lastName')}
              />
              <label htmlFor="last-name">Last Name</label>
              {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
            </div>
            <div className={`form-group ${errors.email ? 'error' : ''}`}>
              <input
                type="email"
                id="email"
                className="input-field"
                {...register('email')}
              />
              <label htmlFor="email">Email</label>
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div className={`form-group ${errors.phone ? 'error' : ''}`}>
              <input
                type="tel"
                id="phone"
                className="input-field"
                {...register('phone')}
              />
              <label htmlFor="phone">Phone</label>
              {errors.phone && <p className="error-message">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="form-right">
            <div className={`form-group ${errors.message ? 'error' : ''}`}>
              <textarea
                id="message"
                className="input-field textarea-field"
                rows="9"
                {...register('message')}
              ></textarea>
              <label htmlFor="message">Message</label>
              {errors.message && <p className="error-message">{errors.message.message}</p>}
            </div>
          </div>
        </div>
        <div className="form-footer">
          {errors.terms && <p className="error-message">{errors.terms.message}</p>}
          <button
            type="submit" // Mudei para "submit" para enviar o formulário
            className="submit-button"
          >
            Send Message <FaPaperPlane className="icon" />
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;

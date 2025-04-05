import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
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
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado de envio

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const navigate = useNavigate(); // Hook para redirecionamento

  const onSubmit = (data) => {
    console.log('Form Data Submitted:', data);

    setIsSubmitting(true); // Ativa o estado de envio

    emailjs
      .send(
        'service_zki2kus',
        'template_hxbakrl',
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        '7FdB2dxffPybWl9d4'
      )
      .then(
        (response) => {
          toast.success('Message sent successfully!', {
            duration: 3000,
            style: {
              backgroundColor: '#4CAF50',
              color: 'white',
            },
          });
          console.log('Email sent successfully:', response);
          reset();
          navigate('/success'); // Redireciona para a página "success"
        },
        (error) => {
          toast.error('Failed to send message. Please try again.', {
            duration: 3000,
            style: {
              backgroundColor: '#f44336',
              color: 'white',
            },
          });
          console.log('Error sending email:', error);
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Desativa o estado de envio após o processo
      });
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
        onSubmit={handleSubmit(onSubmit)}
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
            type="submit"
            className="submit-button"
            disabled={isSubmitting} // Desabilita o botão enquanto o envio está em andamento
          >
            {isSubmitting ? (
              <>
                Sending... <FaPaperPlane className="icon" style={{ color: '#a2c037' }} />
              </>
            ) : (
              <>
                Send Message <FaPaperPlane className="icon" />
              </>
            )}
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import bebefofo from '../../Images/bebe-fofo.jpg'; // Corrigido o caminho da imagem
import * as yup from 'yup';
import './Contact.css';

// Esquema de validação Yup
const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
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
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // Validação em tempo real
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <div >
        <div className="contact-container">
           
      <div className="title-contact">
        <div className="title">Contact Us</div>
        <div className="subtitle">We'd love to hear from you!</div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="forms">
        <div className="form-left">
          <div className="form-group">
            <input
              type="text"
              id="first-name"
              className="input-field"
              {...register('firstName')}
            />
            <label htmlFor="first-name">First Name</label>
            {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              id="last-name"
              className="input-field"
              {...register('lastName')}
            />
            <label htmlFor="last-name">Last Name</label>
            {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              className="input-field"
              {...register('email')}
            />
            <label htmlFor="email">Email</label>
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="form-group">
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
          <div className="form-group">
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
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="terms"
              className="checkbox"
              {...register('terms')}
            />
            <div htmlFor="terms" className="terms-submit">
              I agree to the <a href="#terms" className="terms-link"> terms and conditions</a>
            </div>
          </div>
          {errors.terms && <p className="error-message">{errors.terms.message}</p>}
          <button
            type="submit"
            className="submit-button"
            disabled={!isValid}
          >
            Send Message
          </button>
        </div>
      </form>
      </div>
      <div className="card-time">
        <div className="left-side">
            <div className="days">
            Monday - Sunday </div> <div className="open">Open</div>
        </div>
        <div className="right-side">
            <img src={bebefofo} alt="Deusa Grega" className="contact-image" />
        </div>
      </div>
    </div>
    
  );
};

export default Contact;

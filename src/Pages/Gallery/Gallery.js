import React from 'react';
import './Gallery.css';
import bebefofo from '../../Images/bebe-fofo.jpg'; // Corrigido o caminho da imagem
import { motion } from 'framer-motion'; // Importa o framer-motion

const Gallery = () => {
  return (
    <div className="gallery-container">
      <motion.div 
        className="title"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Photo Gallery
      </motion.div>

      <div className="photos-container">
        <motion.div 
          className="photos-grid"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5, delay: 0.5 }} 
        >
          <motion.img 
            src={bebefofo} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.img 
            src={bebefofo} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.img 
            src={bebefofo} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.7 }}
          />
          <motion.img 
            src={bebefofo} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.img 
            src={bebefofo} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.9 }}
          />
          <motion.img 
            src={bebefofo} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.img 
            src={bebefofo} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.1 }}
          />
          <motion.img 
            src={bebefofo} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;

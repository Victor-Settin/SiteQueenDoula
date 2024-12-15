import React from 'react';
import './Gallery.css';
import img1 from '../../Images/image-2.jpeg';
import img2 from '../../Images/image-3.jpeg';
import img3 from '../../Images/image-4.jpeg';
import img4 from '../../Images/image-5.jpeg';
import img5 from '../../Images/image-6.jpeg'; 
import img6 from '../../Images/bebe-fofo.jpg';
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
            src={img1} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.img 
            src={img2} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.img 
            src={img3} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.7 }}
          />
          <motion.img 
            src={img4} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.img 
            src={img5} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.9 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.1 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.img 
            src={img6} 
            alt="Deusa Grega" 
            className="gallery-image"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.img 
            src={img6} 
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

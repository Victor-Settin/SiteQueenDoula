import React, { useState } from 'react';
import './Gallery.css';
import img1 from '../../Images/a1.jpg';
import img2 from '../../Images/img2121.jpg';
import img3 from '../../Images/img321.jpg';
import img4 from '../../Images/img11.jpg';
import img5 from '../../Images/LetterForRaquel.jpg';
import img6 from '../../Images/a6.jpg';
import img7 from '../../Images/a7.jpg';
import img8 from '../../Images/jul.jpg';
import img9 from '../../Images/gem1.jpg';
import img10 from '../../Images/gem2.jpg';

 
import { motion } from 'framer-motion';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
 
const images = [img1,img2,img3,img4,img6,img7,img5,img8, img9,img10 ];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="gallery-container">
      <motion.div
        className="title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Photo Gallery
      </motion.div>

      <div className="photos-container">
        <motion.div
          className="photos-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Imagem ${index + 1}`}
              className="gallery-image"
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 + index * 0.1 }}
            />
          ))}
        </motion.div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;

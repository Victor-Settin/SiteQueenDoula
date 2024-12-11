import React from 'react';
import './Gallery.css';
import bebefofo from '../../Images/bebe-fofo.jpg'; // Corrigido o caminho da imagem

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="title">Photo Gallery</div>
      <div className="photos-container">
        <div className="photos-grid">
          <img src={bebefofo} alt="Deusa Grega" className="gallery-image" />
          <img src={bebefofo} alt="Deusa Grega" className="gallery-image" />
          <img src={bebefofo} alt="Deusa Grega" className="gallery-image" />
          <img src={bebefofo} alt="Deusa Grega" className="gallery-image" />
          <img src={bebefofo} alt="Deusa Grega" className="gallery-image" />
          <img src={bebefofo} alt="Deusa Grega" className="gallery-image" />
          <img src={bebefofo} alt="Deusa Grega" className="gallery-image" />
          <img src={bebefofo} alt="Deusa Grega" className="gallery-image" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

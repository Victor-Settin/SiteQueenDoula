import React, { useState } from 'react';
import './Gallery.css';
import img1 from '../../assets/Images/a1.jpg';
import img2 from '../../assets/Images/img2121.jpg';
import img3 from '../../assets/Images/img321.jpg';
import img4 from '../../assets/Images/img11.jpg';
import img5 from '../../assets/Images/LetterForRaquel.jpg';
import img6 from '../../assets/Images/a6.jpg';
import img7 from '../../assets/Images/a7.jpg';
import img8 from '../../assets/Images/jul.jpg';
import img9 from '../../assets/Images/gem1.jpg';
import img10 from '../../assets/Images/gem2.jpg';
import { motion } from 'framer-motion';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import ReactPaginate from 'react-paginate';

const images = [
  img1, img2, img3, img4, img6, img7, img5, img8, img9, img10
];

const ITEMS_PER_PAGE = 9;

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  const openLightbox = (index) => {
    setPhotoIndex(index + currentPage * ITEMS_PER_PAGE);
    setIsOpen(true);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const paginatedImages = images.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="gallery-container" id="gallery">
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
          {paginatedImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Gallery image ${index + 1 + currentPage * ITEMS_PER_PAGE}`}
              className="gallery-image"
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 + index * 0.1 }}
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
      <ReactPaginate
        previousLabel={'Previous'} // Alterado para inglês
        nextLabel={'Next'}        // Alterado para inglês
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={1}  // Mostra 1 página nas extremidades antes do "..."
        pageRangeDisplayed={2}    // Limita a 3 números de página visíveis
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
      />
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default Gallery;
import React, { useState } from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import ReactPaginate from 'react-paginate';
import { importAll } from '../../utils/loadImages';

// Importa todas as imagens da pasta Kids
const allImages = importAll(
  require.context('../../assets/Images/Kids', false, /\.(png|jpe?g|svg)$/)
);

// Função para extrair o nome do arquivo da string do caminho
const getFileName = (path) => path.split('/').pop();

// Ordem exata que você quer na página 1
const preferredOrder = [
  'a6.jpg',
  'img11.jpg',
  'a7.jpg',
  'gem1.jpg',
  'a1.jpg',
  'img2121.jpg',
  'img321.jpg',
  'LetterForRaquel.jpg',
  'jul.jpg',
];

// Reorganiza as imagens: as preferidas primeiro, o resto depois
const images = [
  ...preferredOrder
    .map(name => allImages.find(img => getFileName(img) === name))
    .filter(Boolean), // evita undefined caso alguma não exista
  ...allImages.filter(img => !preferredOrder.some(name => getFileName(img) === name))
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
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
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
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;

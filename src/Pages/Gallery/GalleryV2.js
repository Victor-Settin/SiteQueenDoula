

import React from 'react';
import 'swiper/swiper-bundle.css';
import './Gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import img1 from '../../Images/a1.jpg';
import img2 from '../../Images/a2.jpg';
import img3 from '../../Images/a3.jpg';
import img4 from '../../Images/a4.jpg';
import img5 from '../../Images/a5.jpg';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="title">Photo Gallery</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src={img1} alt="Deusa Grega" className="gallery-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Deusa Grega" className="gallery-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Deusa Grega" className="gallery-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Deusa Grega" className="gallery-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Deusa Grega" className="gallery-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;

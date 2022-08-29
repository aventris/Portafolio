import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "@styles/ImageCarousel.scss";

const ImageCarousel = ({ images, onToggleModal }) => {
  return (
    <Swiper
      className="mySwiper"
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      onClick={onToggleModal}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="swiper-image-container">
          <img
            onClick={(e) => e.stopPropagation()}
            src={image}
            alt=""
            className="swiper-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;

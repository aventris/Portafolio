import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "@styles/ImageCarousel.scss";

const ImageCarousel = ({ images }) => {
  return (
    <Swiper
      className="mySwiper"
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop
    >
      {images.map((image) => (
        <SwiperSlide key={image} className="swiper-image-container">
          <img src={image} alt="" className="swiper-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;

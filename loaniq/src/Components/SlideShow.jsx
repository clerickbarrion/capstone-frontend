import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SlideShow() {
  const [swiper, setSwiper] = useState(null);
  const handleNextButtonClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrevButtonClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <div className="swiper-container">
      <h1>Slide Show</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={setSwiper}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
      >
        <div
          className="swiper-button-next"
          onClick={handleNextButtonClick}
        ></div>
        <SwiperSlide className="slide1">Slide 1</SwiperSlide>
        <SwiperSlide className="slide2">Slide 2</SwiperSlide>
        <SwiperSlide className="slide3">Slide 3</SwiperSlide>
        <SwiperSlide className="slide4">Slide 4</SwiperSlide>
        <SwiperSlide className="slide5">Slide 5</SwiperSlide>
        <div
          className="swiper-button-prev"
          onClick={handlePrevButtonClick}
        ></div>
      </Swiper>

      <style jsx>{`
        .swiper-container {
          width: calc(100vw - 800px);
          overflow: hidden;
          margin: 0 420px;
        }
        .swiper-container h1 {
          display: flex;
          justify-content: center;
        }
        .swiper-wrapper {
          display: flex !important;
        }

        .swiper-slide {
          border: 1px solid #ccc;
          padding: 20px;
        }
        .swiper swiper-initialized swiper-horizontal swiper-backface-hidden {
          display: flex;
          justify-content: center;
        }

        .slide1,
        .slide2,
        .slide3,
        .slide4,
        .slide5 {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30px;
          height: 300px;
          width: 100px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: black;
          height: 1rem !important;
          width: 1rem !important;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}

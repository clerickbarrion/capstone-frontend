import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={setSwiper}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 9000 }}
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
          border: 1px solid #ccc;
        }

        .swiper-slide {
          border: 1px solid #ccc;
          padding: 20px;
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
          height: 200px;
          width: 100px;
        }
      `}</style>
    </div>
  );
}

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
      <h1>The LoanIQ Advantage</h1>
      <div className="swiper-content">
        <div
          className="swiper-button-prev"
          onClick={handlePrevButtonClick}
        ></div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={80}
          pagination={{ clickable: true }}
          onSwiper={setSwiper}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            1000: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="slide1">
            <h4>Streamlined Application Process:</h4>
            <p>
              Apply for loans effortlessly from anywhere, whether it's your
              home, office, or on the go. Our intuitive platform simplifies the
              application process, saving you time and hassle.
            </p>
          </SwiperSlide>
          <SwiperSlide className="slide2">
            <h4>Competitive Loan Options:</h4>
            <p>
              We understand that every financial situation is unique. That's why
              we offer competitive rates and a variety of loan options tailored
              to your specific needs and circumstances.
            </p>
          </SwiperSlide>
          <SwiperSlide className="slide3">
            <h4>Personalized Guidance:</h4>{" "}
            <p>
              Our team of experts is dedicated to providing personalized
              guidance throughout your loan journey. From application to
              approval, we're here to answer your questions and address your
              concerns every step of the way.{" "}
            </p>
          </SwiperSlide>
          <SwiperSlide className="slide4">
            <h4>Personalized Guidance:</h4>{" "}
            <p>
              Our team of experts is dedicated to providing personalized
              guidance throughout your loan journey. From application to
              approval, we're here to answer your questions and address your
              concerns every step of the way.{" "}
            </p>
          </SwiperSlide>
          <SwiperSlide className="slide5">
            <h4>Personalized Guidance:</h4>{" "}
            <p>
              Our team of experts is dedicated to providing personalized
              guidance throughout your loan journey. From application to
              approval, we're here to answer your questions and address your
              concerns every step of the way.{" "}
            </p>
          </SwiperSlide>
        </Swiper>
        <div
          className="swiper-button-next"
          onClick={handleNextButtonClick}
        ></div>
      </div>

      <style jsx>{`
        .swiper-container {
          position: relative;
          overflow: hidden;
          margin-bottom: 250px;
        }
        .swiper-container h1 {
          display: flex;
          justify-content: center;
          margin-top: 250px;
          margin-bottom: 50px;
        }
        .swiper-wrapper {
          display: flex !important;
        }
        .swiper-content {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .swiper-slide {
          border: 4px solid black;
          border-radius: 10px;
          padding: 20px;
        }

        .slide1,
        .slide2,
        .slide3,
        .slide4,
        .slide5 {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          font-size: 13px;
          height: 300px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: black;
          margin: 0 20px 20px;
          height: 1rem !important;
          width: 1rem !important;
          border: 3px solid black;
          border-radius: 50%;
          padding: 15px;
          position: inherit;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1rem;
        }
        .swiper-pagination {
          position: inherit;
          bottom: 0;
          margin-top: 20px;
        }
        .swiper-pagination-bullet-active {
          background-color: black !important;
        }
      `}</style>
    </div>
  );
}

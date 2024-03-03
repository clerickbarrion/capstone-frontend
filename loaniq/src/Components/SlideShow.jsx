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
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={80}
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
        <SwiperSlide className="slide1">
          <h4>Streamlined Application Process:</h4>
          <p>
            Apply for loans effortlessly from anywhere, whether it's your home,
            office, or on the go. Our intuitive platform simplifies the
            application process, saving you time and hassle.
          </p>
        </SwiperSlide>
        <SwiperSlide className="slide2">
          <h4>Competitive Loan Options:</h4>
          <p>
            We understand that every financial situation is unique. That's why
            we offer competitive rates and a variety of loan options tailored to
            your specific needs and circumstances.
          </p>
        </SwiperSlide>
        <SwiperSlide className="slide3">
          <h4>Personalized Guidance:</h4>{" "}
          <p>
            Our team of experts is dedicated to providing personalized guidance
            throughout your loan journey. From application to approval, we're
            here to answer your questions and address your concerns every step
            of the way.{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide className="slide4">
          <h4>Personalized Guidance:</h4>{" "}
          <p>
            Our team of experts is dedicated to providing personalized guidance
            throughout your loan journey. From application to approval, we're
            here to answer your questions and address your concerns every step
            of the way.{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide className="slide5">
          <h4>Personalized Guidance:</h4>{" "}
          <p>
            Our team of experts is dedicated to providing personalized guidance
            throughout your loan journey. From application to approval, we're
            here to answer your questions and address your concerns every step
            of the way.{" "}
          </p>
        </SwiperSlide>
        <div
          className="swiper-button-prev"
          onClick={handlePrevButtonClick}
        ></div>
      </Swiper>
      <div className="custom-shape-divider-top-1709339668">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
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
        }
        .swiper-wrapper {
          display: flex !important;
        }

        .swiper-slide {
          border: 1px solid #ccc;
          padding: 20px;
          margin-top: 100px;
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
          flex-direction: column;
          align-items: center;
          text-align: center;
          font-size: 13px;
          height: 300px;
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
        .custom-shape-divider-top-1709339668 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .custom-shape-divider-top-1709339668 svg {
          position: relative;
          display: block;
          width: calc(148% + 1.3px);
          height: 150px;
        }

        .custom-shape-divider-top-1709339668 .shape-fill {
          fill: #f7f3e8;
        }

        @media (max-width: 698px) {
          .swiper-slide {
            margin-top: 0; // Remove margin top for small screens
          }
        }
      `}</style>
    </div>
  );
}

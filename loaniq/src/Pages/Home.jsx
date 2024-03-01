import React from "react";
import Hero from "../Components/hero";
import Hero2 from "../Components/hero2";
import SlideShow from "../Components/SlideShow";
import MiddleQuote from "../Components/MiddleQuote";

export default function Home() {
  return (
    <div>
      <div className="hero-container">
        <Hero />
      </div>
      <div className="hero2-container">
        <Hero2 />
      </div>
      <div className="slideshow-container">
        {/* <SlideShow /> */}
      </div>
      <style jsx>
        {`
          .hero-container {
            margin-top: 20px;
            margin-left: 200px;
          }
          .slideshow-container {
            margin-top: 250px;
            margin-bottom: 100px;
          }
          .hero2-container {
            displey: flex;
            justify-content: center;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

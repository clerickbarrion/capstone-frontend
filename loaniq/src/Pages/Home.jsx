import React from "react";
import Hero from "../Components/hero";
import SlideShow from "../Components/SlideShow";

export default function Home() {
  return (
    <div>
      <div className="hero-container">
        <Hero />
      </div>
      <div className="slideshow-container">
        <SlideShow />
      </div>
      <style jsx>
        {`
          .hero-container {
            margin-top: 50px;
          }
          .slideshow-container {
            margin-top: 250px;
          }
        `}
      </style>
    </div>
  );
}

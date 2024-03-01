import React, {useEffect} from "react";
import Hero from "../Components/hero";
import SlideShow from "../Components/SlideShow";

export default function Home() {
  useEffect(() => {
    document.querySelector(".home-nav-item").style.borderBottom = "2px solid #182d09";
  }, []);
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

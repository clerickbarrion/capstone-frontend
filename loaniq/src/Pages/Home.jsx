import React, {useEffect} from "react";
import Hero from "../Components/hero";
import Hero2 from "../Components/hero2";
import SlideShow from "../Components/SlideShow";
import MiddleQuote from "../Components/MiddleQuote";

export default function Home() {
  useEffect(() => {
    document.querySelector(".home-nav-item").style.borderBottom = "2px solid #182d09";
  }, []);
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

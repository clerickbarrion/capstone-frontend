import React from "react";
import heroImage from "../Assets/Images/hero-image.png";

export default function Hero() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="hero-text">
            <h3>Find a Loan with LoanIQ</h3>
            <p>Find the best loan for you with LoanIQ</p>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="hero-image-container">
            <img src={heroImage} alt="hero" className="img-fluid hero-image" />
          </div>
        </div>
      </div>
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                stopColor="rgba(152, 142, 142, 0.8)"
                stopOpacity="1"
              />
              <stop
                offset="100%"
                stopColor="rgba(152, 142, 142, 0)"
                stopOpacity="0"
              />
            </linearGradient>
            <mask id="wave-mask">
              <rect
                x="0"
                y="0"
                width="1200"
                height="120"
                fill="url(#gradient)"
              />
            </mask>
          </defs>
          <path
            d="M0,92.83C79,72,161.89,31,241.84,14.19c82.26-17.34,168.06-16.33,250.45.39,57.84,11.73,114,31.07,172,41.86A600.21,600.21,0,0,0,1200,27.35V120H0V95.8C67.81,118.92,144.29,111.31,214.34,92.83Z"
            className="shape-fill"
            mask="url(#wave-mask)"
          ></path>
        </svg>
      </div>
      <style jsx>{`
        .hero-image {
          margin-left: 100px;
          max-width: 100%;
          height: auto;
          max-height: 800px;
        }
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .wave svg {
          position: relative;
          display: block;
          width: calc(199% + 1.3px);
          height: 260px;
        }

        .wave .shape-fill {
          fill: #988e8e;
        }
      `}</style>
    </div>
  );
}

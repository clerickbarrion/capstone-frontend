import React from "react";
import heroImage from "../Assets/Images/hero-image.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/apply");
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="hero-text">
            <h3>Find a Loan with LoanIQ</h3>
            <p>Find the best loan for you with LoanIQ</p>
            <button className="btn btn-secondary" onClick={handleGetStarted}>
              Get Started
            </button>
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
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <style jsx>{`
        .hero-image {
          margin-left: 100px;
          max-width: 100%;
          height: auto;
          max-height: 800px;
          z-index: 1;
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
          width: calc(168% + 2.3px);
          height: 240px;
          filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.1));
        }

        .wave .shape-fill {
          fill: #f7f3e8;
        }
      `}</style>
    </div>
  );
}

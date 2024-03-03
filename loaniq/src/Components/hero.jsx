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
            <h3 style={{ fontSize: "44px" }}>
              Find the Perfect Loan with LoanIQ
            </h3>
            <h4 style={{ fontSize: "24px" }}>We Make It Simple:</h4>
            <p style={{ fontSize: "18px" }}>
              Whether you're looking for a mortgage, personal loan, or auto
              financing, LoanIQ simplifies the process and helps you navigate
              through the myriad of options available in the market.
            </p>
            <button className="btn btn-green" onClick={handleGetStarted}>
              Get Started Today
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
        .hero-text {
          margin-top: -75px;
        }

        .hero-text h4 {
          color: #182d09;
          margin-bottom: 25px;
        }
        .hero-text h3 {
          margin-bottom: 25px;
        }

        .btn-green {
          background-color: green;
          color: white;
          border: none;
        }

        .btn-green:hover {
          background-color: darkgreen;
        }

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
          height: 150px;
          filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.1));
        }

        .wave .shape-fill {
          fill: #f7f3e8;
        }

        @media (max-width: 767px) {
          .hero-image {
            margin-right: 10px;
          }
          .wave {
            margin-top: 100px !important;
          }
        }
      `}</style>
    </div>
  );
}

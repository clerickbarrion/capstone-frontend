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
          <div className="hero-text text-center">
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

      <style jsx>{`
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
          max-width: 100%;
          height: auto;
          max-height: 800px;
          z-index: -1;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .hero-text {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}

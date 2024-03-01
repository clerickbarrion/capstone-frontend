import React from "react";
import Image1 from "../Assets/Images/clerick.jpg";
import Image2 from "../Assets/Images/brynn.jpg";
import Image3 from "../Assets/Images/benji.jpg";
import Image4 from "../Assets/Images/tommy.jpg";

export default function About() {
  return (
    <div className="About-Us-container">
      <div className="wave-top">
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
      <div className="Our-Promise-Statement text-center">
        <h2>Our Promise</h2>
        <p>
          "LoanIQ's smart algorithm swiftly analyzes your financial profile and
          swiftly matches you with the perfect loan option tailored to your
          needs."
        </p>
      </div>
      <div className="Our-Values-Statement text-center">
        <h1>Our Values</h1>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <div className="box">
              <p>Value 1</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="box">
              <p>Value 2</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="box">
              <p>Value 3</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <h1>Meet the Team</h1>
          <p>
            Welcome to LoanIQ, your one-stop destination for exploring loan
            options tailored to your needs. With our intuitive platform, we
            simplify the loan application process, helping you determine your
            eligibility and find the best offers available. Whether you're
            seeking a mortgage, personal loan, or auto financing, we're here to
            support your financial journey. Join us today and take the first
            step toward achieving your dreams with confidence!
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-3 mb-3">
          <img src={Image1} alt="benji-pic" className="img-fluid rounded" />
        </div>
        <div className="col-md-3 mb-3">
          <img src={Image2} alt="brynn-pic" className="img-fluid rounded" />
        </div>
        <div className="col-md-3 mb-3">
          <img src={Image3} alt="clerick-pic" className="img-fluid rounded" />
        </div>
        <div className="col-md-3 mb-3">
          <img src={Image4} alt="tommy-pic" className="img-fluid rounded" />
        </div>
      </div>
      <style jsx>{`
        .wave-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: -2;
        }

        .wave-top svg {
          position: relative;
          display: block;
          width: calc(168% + 2.3px);
          height: 240px;
          filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.1));
        }

        .wave-top .shape-fill {
          fill: #182d09;
        }

        .Our-Values-Statement {
          margin-top: 150px;
        }

        .row {
          margin-top: 150px;
        }

        .box {
          border: 1px solid #ccc;
          padding: 20px;
          height: 300px;
          text-align: center;
          margin: 0 50px;
        }
      `}</style>
    </div>
  );
}

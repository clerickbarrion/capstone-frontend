import React from "react";
import heroImage2 from "../Assets/Images/hero2.jpg";

export default function Hero2() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="hero-image-container">
            <img
              src={heroImage2}
              alt="hero"
              className="img-fluid hero-image"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="hero-text-container">
              <h1 className="text-white">
                Less application time, more family time.
              </h1>
              <p className="text-white">....</p>
            </div>
          </div>
        </div>
        <div className="wave-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
              className="shape-fill"
            />
          </svg>
        </div>
        <div className="wave-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </div>
      <style jsx>{`
        .hero-image-container {
          margin-left: -125px;
          margin-right: 88px;
        }
        .container-fluid {
          position: relative;
          overflow: hidden;
        }

        .wave-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          filter: drop-shadow(0px 5px 15px rgba(0, 0, 0.1, 0.1));
        }

        .wave-top svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 52px;
          transform: rotateY(180deg);
        }

        .wave-top .shape-fill {
          fill: #f7f3e8;
        }
        .wave-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
        }

        .wave-bottom svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 103px;
          transform: rotateY(180deg);
        }

        .wave-bottom .shape-fill {
          fill: #f7f3e8;
        }
        .hero-text-container {
          position: absolute;
          top: 70%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
      `}</style>
    </div>
  );
}

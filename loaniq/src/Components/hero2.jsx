import React from "react";
import heroImage2 from "../Assets/Images/hero2.jpg";

export default function Hero2() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col p-0">
          {" "}
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
      </div>
      <style jsx>{`
        .container-fluid {
          position: relative;
          overflow: hidden;
        }
        .hero-image-container img {
          height: 400vh;
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

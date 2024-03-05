import React from "react";

export default function promise() {
  return (
    <div>
      <div className="container">
        <div className="Our-Promise-Statement text-center fs-10">
          <h2 className="promise-header fs-4">Our Promise</h2>
          <p className="promise-text fs-2">
            "LoanIQ's smart algorithm swiftly analyzes <br />
            your financial profile and swiftly matches you with the perfect loan
            option <br /> tailored to your needs."
          </p>
        </div>
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
        {/* <div className="wave-bottom">
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
        </div> */}
      </div>
      <style jsx>{`
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
          width: calc(227% + 1.3px);
          height: 87px;
          transform: rotateY(180deg);
        }

        .wave-bottom .shape-fill {
          fill: #182d09;
        }
      `}</style>
    </div>
  );
}

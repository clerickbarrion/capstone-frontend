import React from "react";

export default function Waves({ variant }) {
  return (
    <div>
      {variant === "top" ? (
        <>
          <div className="wave1">
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
          <div className="wave1-bottom">
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
        </>
      ) : (
        <>
          <div className="wave2">
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

          <div className="wave2-bottom">
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
        </>
      )}
      <style jsx>{`
        .wave1 svg {
          position: relative;
          display: block;
          width: 100%;
          height: 150px;
          margin-top: -150px;
          filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.1));
        }

        .wave1 .shape-fill {
          fill: #f7f3e8;
        }

        .wave1-bottom svg {
          position: relative;
          display: block;
          width: 100%;
          height: 52px;
          margin-bottom: -52px;
          z-index: 1;
        }

        .wave1-bottom .shape-fill {
          fill: #f7f3e8;
        }
        .wave2 svg {
          position: relative;
          display: block;
          width: 100%;
          height: 87px;
          margin-top: -87px;
          transform: rotateX(180deg);
          z-index: 1;
        }

        .wave2 .shape-fill {
          fill: #f7f3e8;
        }
        .wave2-bottom svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 103px;
          margin-bottom: -103px;
        }

        .wave2-bottom .shape-fill {
          fill: #f7f3e8;
        }
      `}</style>
    </div>
  );
}

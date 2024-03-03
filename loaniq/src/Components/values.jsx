import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGetPocket } from "@fortawesome/free-brands-svg-icons";

export default function values() {
  return (
    <div className="value-container">
      <div className="value-boxes">
        <div className="Our-Values-Statement text-center">
          <h1 className="mb-4">Our Values</h1>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div className="box">
                <h4>Customer-Centric Approach:</h4>
                <FontAwesomeIcon icon={faHandshake} size="3x" />
                <p className="fs-10">
                  We prioritize our customers' needs and aspirations, offering
                  personalized loan solutions tailored to their financial
                  situations. Our commitment is to empower individuals with
                  accessible and flexible lending options, ensuring their
                  journey towards financial stability is seamless and rewarding.
                </p>
              </div>
            </div>

            <div className="col-md-4 ms-3 mb-3">
              <div className="box">
                <h4>Integrity and Transparency:</h4>
                <FontAwesomeIcon icon={faGetPocket} size="3x" />
                <p className="fs-10">
                  At our core, we uphold the values of integrity and
                  transparency in all our interactions. We believe in fostering
                  trust with our clients through clear and honest communication,
                  ensuring they have a complete understanding of their loan
                  terms and conditions. Our aim is to build long-lasting
                  relationships based on mutual respect and transparency.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="box">
                <h4>Innovation and Efficiency</h4>
                <FontAwesomeIcon icon={faRocket} size="3x" />
                <p className="fs-10">
                  We continually strive for innovation and efficiency in our
                  loan management processes. Leveraging cutting-edge technology,
                  we streamline the lending experience, making it faster,
                  simpler, and more convenient for our customers. Our dedication
                  to innovation enables us to adapt to evolving market dynamics
                  and deliver innovative solutions that meet the changing needs
                  of our clients.
                </p>
              </div>
            </div>
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
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
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
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          />
        </svg>
      </div>

      <style jsx>{`
        .value-container {
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
        }
        .value-boxes {
          margin-bottom: 150px;
        }

        .wave-top svg {
          position: relative;
          display: block;
          width: calc(227% + 1.3px);
          height: 87px;
          transform: rotateY(180deg);
        }

        .wave-top .shape-fill {
          fill: #182d09;
        }
        .wave-bottom {
          position: absolute;
          bottom: 0px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .wave-bottom svg {
          position: relative;
          display: block;
          width: calc(227% + 1.3px);
          height: 87px;
        }

        .wave-bottom .shape-fill {
          fill: #182d09;
        }
      `}</style>
    </div>
  );
}

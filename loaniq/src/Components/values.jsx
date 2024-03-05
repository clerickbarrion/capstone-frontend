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

      <style jsx>{`
        .value-container {
          position: relative;
          overflow: hidden;
        }

        .value-boxes {
          margin-bottom: 150px;
        }
      `}</style>
    </div>
  );
}

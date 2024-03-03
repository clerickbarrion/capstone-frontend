import React from "react";
import Image1 from "../Assets/Images/clerick.jpg";
import Image2 from "../Assets/Images/brynn.jpg";
import Image3 from "../Assets/Images/benji.jpg";
import Image4 from "../Assets/Images/tommy.jpg";

export default function MeetTeam() {
  return (
    <div>
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
          <img
            src={Image1}
            alt="benji-pic"
            className="img-fluid rounded mx-md-3"
          />
        </div>
        <div className="col-md-3 mb-3">
          <img
            src={Image2}
            alt="brynn-pic"
            className="img-fluid rounded mx-md-3"
          />
        </div>
        <div className="col-md-3 mb-3">
          <img
            src={Image3}
            alt="clerick-pic"
            className="img-fluid rounded mx-md-3"
          />
        </div>
        <div className="col-md-3 mb-3">
          <img
            src={Image4}
            alt="tommy-pic"
            className="img-fluid rounded mx-md-3"
          />
        </div>
      </div>
      <style jsx>{`
        .team-img {
          width: 60%;
          margin: 0 auto;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

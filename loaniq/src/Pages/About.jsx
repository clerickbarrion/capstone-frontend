import React, {useEffect} from "react";
import Image1 from "../Assets/Images/clerick.jpg";
import Image2 from "../Assets/Images/brynn.jpg";
import Image3 from "../Assets/Images/benji.jpg";

export default function About() {
  useEffect(() => {
    document.querySelector(".about-nav-item").style.borderBottom = "2px solid #182d09";
  }, []);

  return (
    <div className="container">
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
        <div className="col-md-4 mb-3">
          <img src={Image1} alt="benji-pic" className="img-fluid rounded" />
        </div>
        <div className="col-md-4 mb-3">
          <img src={Image2} alt="brynn-pic" className="img-fluid rounded" />
        </div>
        <div className="col-md-4 mb-3">
          <img src={Image3} alt="clerick-pic" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}

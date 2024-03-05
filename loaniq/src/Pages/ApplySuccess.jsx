import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ApplySuccess() {
  const location = useLocation();
  const [data, setData] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (!location.state) {
      window.location = "/apply";
    } else {
      if (JSON.parse(localStorage.getItem("userInfo")) === null) {
        setIsLogged(false);
      } else {
        setIsLogged(true);
      }
    }
    setData(location.state.data);
  }, []);

  return (
    <div>
      {!isLogged ? (
        <div>
          <div class="container-fluid">
            <div class="p-5 mb-4 rounded-3">
              <div class="row">
                <div class="col mb-5 text-center">
                  <h1 class="display-5 fw-bold text-center">
                    Congratulations!
                  </h1>
                  <p class="fs-4 text-center">
                    Since you're not logged in, we have pre-qualified your loan
                    application! In order to save your future loan applications
                    and have them reviewed by our admins, please create an
                    account or log in. Thank you for using LoanIQ!
                  </p>
                  <a href="/">
                    <button class="form-btns btn btn-lg m-3">Home</button>
                  </a>
                  <button
                    class="form-btns btn btn-lg m-3"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    View Application
                  </button>
                  <a href="/login">
                    <button class="form-btns btn btn-lg m-3">Login</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Your Application
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <h1 class="fw-bold">
                    {data.riskLevel === "Low"
                      ? "Approved"
                      : data.riskLevel === "Medium"
                      ? "Needs Further Review"
                      : "Denied"}
                  </h1>
                  <p class="fs-5">
                    Based on our A.I powered technology, we have determined that
                    you're application{" "}
                    {data.riskLevel === "Low"
                      ? "would be approved. Your credentials deem you eligible to being an offical loan process! Login or create an account if you would like to create an offical loan application with our admins."
                      : data.riskLevel === "Medium"
                      ? "needs further review. This is due because our A.I Bot cannot determine to approve or deny your application at this moment and would require admins to review your application to come to a more accurate decision. If you would like us to take a look at your application, please login or create an account and submit another application."
                      : "would be denied. Unfortunately, your credentials would have high risks due to either low credit score, low income-to-debt ratio, or the amount requested is too high in comparison to your income. Thank you for using LoanIQ!"}
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="p-5 mb-4 rounded-3">
          <div class="container-fluid w-100 text-center py-5">
            <h1 class="display-5 fw-bold">Congratulations!</h1>
            <p class="fs-4">
              You have successfully submitted your loan application! Please give
              our admins some time to review your loan application in order for
              them to come to the best decision possible. You can view all of
              your loan applications via your dashboard. Thank you for using
              LoanIQ!
            </p>
            <a href="/apply">
              <button class="btn form-btns btn-lg" type="button">
                Submit Another Application
              </button>
            </a>
            <a href="/user/dashboard">
              <button class="btn form-btns m-3 btn-lg" type="button">
                Go to Dashboard
              </button>
            </a>
          </div>
        </div>
      )}
      <style jsx>{`
        .form-btns {
          background-color: transparent;
          border: 1px solid #182d09;
          padding: 5px 15px;
          border-radius: 5px;
          transition: all 0.3s;
        }

        .form-btns:hover {
          background-color: #182d09;
          color: white;
          transition: all 0.3s;
        }
      `}</style>
    </div>
  );
}

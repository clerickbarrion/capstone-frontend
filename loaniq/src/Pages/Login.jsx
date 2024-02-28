import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../Assets/Images/loaniq-logo.png";

export default function Login() {
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login") {
      document.querySelector("nav").style.display = "none";
      document.querySelector("footer").style.display = "none";
    }
  }, []);
  return (
    <div className="container-fluid py-3 my-auto mx-auto">
      <section class="h-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="z-1 col-xl-10">
              <div class="rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center mb-3">
                        <a href="/">
                          <img
                            src={logo}
                            style={{ width: "100px" }}
                            alt="logo"
                          />
                        </a>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div class="form-floating mb-4">
                          <input
                            type="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput">Email address</label>
                        </div>

                        <div class="form-floating mb-4">
                          <input
                            type="password"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Password"
                          />
                          <label for="floatingInput">Password</label>
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-primary btn-block fa-lg mb-3 w-100"
                            type="button"
                          >
                            Log in
                          </button>
                          <a class="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <a href="/register">
                          <button type="button" class="btn btn-outline-danger">
                            Create new
                          </button>
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-black px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">LoanIQ makes it easy.</h4>
                      <p class="small mb-0">
                        Tired of complicated loan services? LoanIQ allows you to
                        streamline the process of applying for a loan. Our tools
                        utilize the latest technology to make the process as
                        quick and easy as possible. Get started today!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <style jsx>{`
        .wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
            transform: rotate(180deg);
        }
        
        .wave svg {
            position: relative;
            display: block;
            width: calc(191% + 1.3px);
            height: 500px;
        }
        
        .wave .shape-fill {
            fill: #182d09;
        }

        @media screen and (max-width: 991px) {
            .wave {
                display: none;
            }
        }
      `}</style>
    </div>
  );
}

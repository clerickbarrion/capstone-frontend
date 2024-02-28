import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../Assets/Images/loaniq-logo.png";

export default function Register() {
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/register") {
      document.querySelector("nav").style.display = "none";
      document.querySelector("footer").style.display = "none";
      document.querySelector(".chat").style.display = "none";
    }
  }, []);
  return (
    <div>
      <section class="h-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="z-1 col-xl-10">
              <div class="rounded-3 text-black">
                <div class="row g-0 justify-content-center align-items-center">
                  <div class="col-lg-6 w-100">
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
                        <p>Please sign-up to create your account</p>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-floating mb-4">
                              <input
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                placeholder="First Name"
                              />
                              <label for="floatingInput">First Name</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-floating mb-4">
                              <input
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                placeholder="Last Name"
                              />
                              <label for="floatingInput">Last Name</label>
                            </div>
                          </div>
                        </div>

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

                        <div class="form-floating mb-4">
                          <input
                            type="password"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Confirm Password"
                          />
                          <label for="floatingInput">Confirm Password</label>
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-primary btn-block fa-lg mb-3 w-100"
                            type="button"
                          >
                            Sign-up
                          </button>
                          <p class="small or-span" href="#!">
                            <span>OR</span>
                          </p>
                          <a class="p" href="/login">
                            Login
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .or-span {
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #000;
            line-height: 0.1em;
            margin: 10px 0 20px;
          }

          .or-span span {
            background: #f7f3e8;
            padding: 0 10px;
          }
        `}
      </style>
    </div>
  );
}

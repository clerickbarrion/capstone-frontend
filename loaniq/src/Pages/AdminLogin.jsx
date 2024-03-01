import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../Assets/Images/loaniq-logo.png";

export default function Login() {
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/admin/login") {
      document.querySelector("nav").style.display = "none";
      document.querySelector("footer").style.display = "none";
      document.querySelector(".chat").style.display = "none";
      document.querySelector(".openChatBtn").style.display = "none";
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
                  <div>
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
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Admin ID"
                          />
                          <label for="floatingInput">Admin ID</label>
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

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Not an admin? Return to user login</p>
                          <a href="/login">
                          <button type="button" class="btn btn-outline-danger">
                            Back
                          </button>
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
    </div>
  );
}

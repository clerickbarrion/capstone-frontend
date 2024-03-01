import React from "react";
import logo from "../Assets/Images/loaniq-logo.png";

export default function Header(props) {
  const { activePage } = props; // Destructuring activePage from props
  const logoStyle = activePage === "about" ? "white" : "";
  return (
    <div class="mt-2 mb-5 main-header">
      <nav class="navbar navbar-expand-lg container">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src={logo}
              style={{
                width: "50px",
                height: "auto",
                filter: `brightness(${logoStyle})`,
              }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav me-auto">
              <li class="nav-item mx-3">
                <a class="nav-link home-nav-item pb-1 px-0" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link apply-nav-item pb-1 px-0" href="/apply">
                  Apply
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link about-nav-item pb-1 px-0" href="/about">
                  About Us
                </a>
              </li>
            </ul>
            <a href="/login"><button class="btn btn-outline-dark login-btn">Login</button></a>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          .btn-outline-dark {
            border: 1px solid #182d09;
            border-radius: 20px;
          }

          .btn-outline-dark:hover {
            border: 1px solid #182d09;
            background-color: #182d09;
          }

          @media screen and (max-width: 992px) {
            .login-btn {
              margin-top: 10px;
              margin-left: 15px;
            }
          }
        `}
      </style>
    </div>
  );
}

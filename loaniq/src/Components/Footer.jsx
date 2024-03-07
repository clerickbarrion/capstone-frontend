import React, {useEffect, useRef} from "react";
import logo from "../Assets/Images/loaniq-logo.png";

export default function Footer() {
  const adminLoginLink = useRef(null);


  useEffect(() => {
    if(localStorage.getItem("userInfo") !== null) {
      adminLoginLink.current.style.display = "none";
    }
  }, []);


  return (
    <div class="mt-auto main-footer">
      <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
          <div class="col mb-3">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <img src={logo} style={{ width: "75px", height: "auto" }} />
            </a>
            <p class="text-body-secondary">© 2024</p>
          </div>

          <div class="col mb-3">
            <h5>Quick Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/apply" class="nav-link p-0 text-body-secondary">
                  Apply
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/about" class="nav-link p-0 text-body-secondary">
                  About Us
                </a>
              </li>
              <li ref={adminLoginLink} class="nav-item mb-2">
                <a href="/admin/login" class="nav-link p-0 text-body-secondary">
                  Admin Login
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-2">
            <h5>Socials</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Instagram
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  GitHub
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Disclaimer</h5>
            <p>
              This app is for educational purposes only and should not be taken
              seriously. Content provided is for entertainment and learning, not
              professional advice. Use at your own discretion.
            </p>
          </div>
        </footer>
      </div>
      <style jsx>{`
      .main-footer {
        border-top: 1px solid #d4cbb4;
      }
      `}</style>
    </div>
  );
}

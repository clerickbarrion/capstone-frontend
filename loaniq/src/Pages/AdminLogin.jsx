import React, { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../Assets/Images/loaniq-logo.png";

export default function Login() {
  let location = useLocation();
const [userid, setUserid] = useState('');
const [password, setPassword] = useState(''); 
  useEffect(() => {
    if (location.pathname === "/admin/login") {
      document.querySelector("nav").style.display = "none";
      document.querySelector("footer").style.display = "none";
      document.querySelector(".chat").style.display = "none";
      document.querySelector(".openChatBtn").style.display = "none";
    }

    if (localStorage.getItem("userInfo") !== null) {
      window.location = "/"
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/adminsignin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userid, password})
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      window.location = '/admin/dashboard'; // Redirect to /admin/dashboard
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

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

                      <form onSubmit={handleSubmit}>
                        <p>Please login to your account</p>

                        <div class="form-floating mb-4">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Admin ID"
                            value={userid}
                            onChange={(e) => setUserid(e.target.value)}
                          />
                          <label for="floatingInput">Admin ID</label>
                        </div>

                        <div class="form-floating mb-4">
                          <input
                            type="password"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label for="floatingInput">Password</label>
                        </div>

                        <a class="d-flex">
                          <button type="submit" class="btn btn-primary w-100 mb-3">
                            Sign-in
                          </button>
                        </a>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">
                            Not an admin? Return to user login
                          </p>
                          <a href="/login">
                            <button
                              type="button"
                              class="btn btn-outline-danger"
                            >
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

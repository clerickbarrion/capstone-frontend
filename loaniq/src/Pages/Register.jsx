import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../Assets/Images/loaniq-logo.png";

export default function Register() {
  let location = useLocation();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [emailaddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  useEffect(() => {
    if (location.pathname === "/register") {
      document.querySelector("nav").style.display = "none";
      document.querySelector("footer").style.display = "none";
      document.querySelector(".chat").style.display = "none";
      document.querySelector(".openChatBtn").style.display = "none";
    }
  }, []);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:4000/newuser', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ firstname, lastname, emailaddress, password, confirmpassword})
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Success:', data);
  //     window.location = '/user/dashboard'; // Redirect to /user/dashboard
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/newuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstname, lastname, emailaddress, password, confirmpassword })
      });
  
      if (response.ok) {
        // Successful response
        const data = await response.json();
        console.log('Success:', data);
        window.location = '/user/dashboard'; // Redirect to /user/dashboard
      } else {
        // Error response
        const errorData = await response.json();
        console.error('Error:', errorData.error);
        // Handle the error as needed (e.g., show an error message to the user)
      }
    } catch (error) {
      // Network or other errors
      console.error('Error:', error);
    }
  };
  

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

                      <form onSubmit={handleSubmit}>
                        <p>Please sign-up to create your account</p>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-floating mb-4">
                              <input
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                placeholder="First Name"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
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
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
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
                            value={emailaddress}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label for="floatingInput">Email address</label>
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

                        <div class="form-floating mb-4">
                          <input
                            type="password"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Confirm Password"
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                          />
                          <label for="floatingInput">Confirm Password</label>
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-primary btn-block fa-lg mb-3 w-100"
                            type="submit"
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

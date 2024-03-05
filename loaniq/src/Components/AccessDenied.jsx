import React from "react";

export default function AccessDenied() {
  return (
    <div>
      <div class="container-fluid">
        <div class="p-5 mb-4 rounded-3">
          <div class="row">
            <div class="col mb-5 text-center">
              <h1 class="display-5 fw-bold text-center">403: Access Denied</h1>
              <p class="fs-4 text-center">
                Since you're not logged in as an admin, please log in as an admin or view your dashboard.
              </p>
              <a href="/">
                <button class="btn access-denied-btns btn-lg m-3">Home</button>
              </a>
              <a href="/">
                <button class="btn access-denied-btns btn-lg m-3">Dashboard</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
      .access-denied-btns {
        padding: 0.5rem 1rem;
        border: 1px solid #182d09;
      }

      .access-denied-btns:hover {
        background-color: #182d09;
        color: cornsilk;
      }
      `}</style>
    </div>
  );
}

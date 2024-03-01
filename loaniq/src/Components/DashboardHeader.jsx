import React from "react";
import logo from "../Assets/Images/loaniq-logo.png";

export default function DashboardHeader({ show }) {
  return (
    <div class={show ? "side-nav" : "side-nav active"}>
      <ul class="d-flex flex-column">
        <li>
          <a href="#">All Loans</a>
        </li>
        <li>
          <a href="#">My Assigned Loans</a>
        </li>
        <li>
          <a href="#">Client Payments</a>
        </li>
        <li class="mt-auto">
          <a href="/">Back to Home</a>
        </li>
      </ul>
    </div>
  );
}

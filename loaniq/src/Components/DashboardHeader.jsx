import React from "react";

export default function DashboardHeader(props) {
  return (
    <div class={props.show ? "side-nav z-0" : "side-nav active z-1"}>
      <ul class="d-flex flex-column">
        {props.links.map((link) => (
          <li>
            <a onClick={props.setSideNav}>{link}</a>
          </li>
        ))}
        <li class="mt-auto">
          <a href="/">Back to Home</a>
        </li>
      </ul>
    </div>
  );
}

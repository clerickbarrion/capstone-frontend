import React from "react";

export default function DashboardHeader(props) {
  const handleLinkClick = (link) => {
    props.onLinkClick(link);
  };

  return (
    <div className={props.show ? "side-nav active z-1" : "side-nav z-0"}>
      <ul className="d-flex flex-column">
        {props.links.map((link) => (
          <li key={link}>
            <a onClick={() => handleLinkClick(link)}>{link}</a>
          </li>
        ))}
        <li className="mt-auto">
          <a href="/">Back to Home</a>
        </li>
      </ul>
    </div>
  );
}

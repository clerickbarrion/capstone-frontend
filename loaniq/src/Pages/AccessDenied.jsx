import React, {useEffect} from "react";
import AccessDenied from "../Components/AccessDenied";
import { useLocation } from "react-router-dom";

export default function AccessDenied() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/403") {
        document.querySelector(".main-header").style.display = "none";
        document.querySelector(".main-footer").style.display = "none";
        document.querySelector(".chat").style.display = "none";
        document.querySelector(".openChatBtn").style.display = "none";
      }
  })

  return (
    <div>
      <AccessDenied />
    </div>
  );
}

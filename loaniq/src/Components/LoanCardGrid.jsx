import React from "react";
import LoanCard from "./LoanCard";

export default function LoanCardGrid() {
  return (
    <div class="d-flex z-0 flex-wrap">
      
      <style jsx>{`
        .loanCard {
          transition: transform 0.2s;
        }

        .loanCard:hover {
          transform: scale(1.03);
          transition: transform 0.2s;
        }
      `}</style>
    </div>
  );
}

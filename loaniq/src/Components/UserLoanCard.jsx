import React from "react";

export default function UserLoanCard(props) {
  return (
    <div
      class="loanCard card m-2"
      style={{ maxWidth: "18rem", maxHeight: "25rem", backgroundColor: "#f2e8c4"}}
    >
      <div class={
        props.reviewState == "Under Review"
          ? "card-header text-bg-secondary"
          : props.reviewState == "Approved"
          ? "card-header text-bg-success"
          : "card-header text-bg-danger"
      }>Current Status: {props.reviewState}</div>
      <div class="card-body">
        <h5 class="card-title">{props.loanType}</h5>
        <h5 class="card-title mb-3">{props.loanAmt} | {props.loanTerm}</h5>
      </div>
      <style jsx>{`
        .riskReason {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

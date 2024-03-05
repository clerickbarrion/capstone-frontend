import React from "react";
import LoanModal from "./LoanModal";

export default function LoanCard(props) {
  return (
    <div
      class="card m-2"
      style={{
        maxWidth: "18rem",
        maxHeight: "25rem",
        backgroundColor: "#f2e8c4",
      }}
    >
      <div
        class={
          props.riskLevel == "Low"
            ? "card-header text-bg-success"
            : props.riskLevel == "Medium"
            ? "card-header text-bg-warning"
            : "card-header text-bg-danger"
        }
      >
        Risk Level: {props.riskLevel}
      </div>
      <div class="card-body">
        <h5 class="card-title">{props.loanType}</h5>
        <h5 class="card-title mb-3">
          {props.loanAmt} | {props.loanTerm} months
        </h5>
        <p class="card-text riskReason">{props.riskReason}</p>
        <button
          type="button"
          className="btn text-light modal-btn"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal-${props.loanID}`}
          style={{ zIndex: "2", backgroundColor: "#182d06" }}
        >
          Review Loan
        </button>
        <LoanModal
          key={props.EvaluationID}
          loanType={props.loanType}
          riskReason={props.riskReason}
          riskLevel={props.riskLevel}
          loanID={props.loanID}
          clientID={props.clientID}
          loanTerm={props.loanTerm}
        />
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

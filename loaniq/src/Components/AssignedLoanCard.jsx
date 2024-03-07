import React from "react";

export default function AssignedLoanCard(props) {
  return (
    <div
      class="card m-2"
      style={{
        maxWidth: "18rem",
        maxHeight: "25rem",
        backgroundColor: "#f2e8c4",
      }}
    >
      <div class="card-body">
        <h5 class="card-title">{props.loanType}</h5>
        <h5 class="card-title mb-3">{props.loanTerm} months</h5>
        <div class="d-flex flex-column">
          <label for="payment-progress">Payment progress:</label>
          <label for="payment-progress">
            ${props.amtPaid} / ${props.loanAmt}
          </label>
          <progress
            id="payment-progress"
            value={props.amtPaid}
            max={props.loanAmt}
            // {props.amtPaid}
          ></progress>
        </div>
        <p class="card-text">Client: {props.clientID}</p>
      </div>
      <style jsx>{`
        .riskReason {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        progress[value] {
            -webkit-appearance:none;
            -moz-appearance:none;        
            appearance: none;
          }

          progress[value] {
            --color: #182d06; 
            --background: #bfb797; 
          }
          progress[value]::-webkit-progress-bar {
            border-radius: 5px;
            background: var(--background);
          }
          progress[value]::-webkit-progress-value {
            border-radius: 5px;
            background: var(--color);
          }

      `}</style>
    </div>
  );
}

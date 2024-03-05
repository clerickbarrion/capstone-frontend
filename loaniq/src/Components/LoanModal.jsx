import React from "react";

export default function LoanModal(props) {
  const modalId = `exampleModal-${props.loanID}`;

  return (
    <div>
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby={`${modalId}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className={
              props.riskLevel === "Low"
                ? "modal-header bg-success text-light"
                : props.riskLevel === "Medium"
                ? "modal-header bg-warning text-dark"
                : "modal-header bg-danger text-light"
            }>
              <h5 className="modal-title" id={`${modalId}Label`}>
                Loan Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul>
                <li><strong>Client:</strong> {props.clientID}</li>
                <li><strong>Loan Type:</strong> {props.loanType}</li>
                <li><strong>Loan Term:</strong> {props.loanTerm}</li>
                <li><strong>Risk Level:</strong> {props.riskLevel}</li>
                <li><strong>Risk Reason:</strong> {props.riskReason}</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Deny
              </button>
              <button type="button" className="btn btn-success">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

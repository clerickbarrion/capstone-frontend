import React from "react";

export default function LoanDetailsModal(props) {
  const modalId = `exampleModal-${props.loanID}`;

  return (
    <div>
      <button
        type="button"
        className="btn text-light"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        style={{ zIndex: "2", backgroundColor: "#182d06"}}
      >
        Review Loan
      </button>
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby={`${modalId}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div class={
        props.reviewState === "Approved"
          ? "modal-header text-bg-success text-light"
          : props.reviewState === "Under Review"
          ? "modal-header text-bg-secondary"
          : "modal-header text-bg-danger text-light"
      }>
              <h1 className="modal-title fs-5" id={`${props.modalId}Label`}>
                Loan Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-dark">
                <ul>
                    <li><strong>Loan Amount:</strong> ${props.loanAmt}</li>
                    <li><strong>Loan Type:</strong> {props.loanType}</li>
                    <li><strong>Loan Term:</strong> {props.loanTerm}</li>
                    <li><strong>Current Status:</strong>  {props.reviewState}</li>
                </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
.modal-btn {
      `}</style>
    </div>
  );
}

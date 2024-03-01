import React from "react";

export default function LoanModal(props) {
  const modalId = `exampleModal-${props.loanID}`; // Generate unique id for each modal

  return (
    <div>
      <button
        type="button modal-btn"
        className="btn text-light"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`} // Use the generated unique id as the target
        style={{ zIndex: "2", backgroundColor: "#182d06"}}
      >
        Review Loan
      </button>
      <div
        className="modal fade"
        id={modalId} // Use the generated unique id for the modal's id
        tabIndex="-1"
        aria-labelledby={`${modalId}Label`} // Use the generated unique id for aria-labelledby
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div class={
        props.riskLevel == "Low"
          ? "modal-header text-bg-success text-light"
          : props.riskLevel == "Medium"
          ? "modal-header text-bg-warning"
          : "modal-header text-bg-danger text-light"
      }>
              <h1 className="modal-title fs-5" id={`${modalId}Label`}>
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
                    <li><strong>Client:</strong> {props.clientName}</li>
                    <li><strong>Loan Type:</strong> {props.loanType}</li>
                    <li><strong>Loan Term:</strong> {props.loanTerm}</li>
                    <li><strong>Risk Level:</strong>  {props.riskLevel}</li>
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
      <style jsx>{`
.modal-btn {
      `}</style>
    </div>
  );
}

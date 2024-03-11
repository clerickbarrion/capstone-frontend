import React, { useState, useEffect } from "react";
import Modal from "react-modal";

export default function Loan(props) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [timeLeft, setTimeLeft] = useState(
    countdown(new Date(props.applyDate))
  );
  const minimum = props.loanAmount / props.loanTerm;

  useEffect(() => {
    setInterval(() => setTimeLeft(countdown(new Date(props.applyDate)), 1000));
  });

  function countdown(applyDate) {
    const today = Number(new Date());
    let nextMonth = Number(new Date(applyDate)) + 2629800000;
    while (nextMonth < today) {
      nextMonth += 2629800000;
    }
    const time = nextMonth - today;
    const daysLeft = Math.floor(
      (time % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const hoursLeft = Math.floor(
      (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((time % (1000 * 60)) / 1000);
    return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
  }

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  function makePayment(e) {
    fetch(`http://localhost:4000/makePayment`, {
      body: JSON.stringify({
        LoanID: props.loanID,
        AmountPaid: e.target.previousSibling.value,
      }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    window.location.reload();
  }
  return (
    <div>
      <div
        className="loan card"
        style={{ width: "18rem", margin: "10px", backgroundColor: "#e2d2b6" }}
      >
        <div className="card-header fs-4 text-center">
          <h1>
            <strong>{props.loanType}</strong>
          </h1>
        </div>
        <div className="card-body">
          <h5 className="card-text mb-2 fs-6">
            Loan Amount: {props.loanAmount}
          </h5>
          <p className="card-text mb-2">Loan Term: {props.loanTerm} months</p>
          <p className="card-text mb-2">Amount Paid: {props.amountPaid}</p>
          <p className="card-text mb-2">Next payment due: {timeLeft}</p>
          <div className="text-center mt-3">
            <button onClick={openModal} className="btn btn-success text-light">
              Make Payment
            </button>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
            content: {
              width: "350px",
              height: "350px",
              margin: "auto",
              border: "3px solid black",
            },
          }}
        >
          <div className="Modal-content  mt-5">
            <h2 className="card-header mb-3 text-center">Make Payment</h2>
            <div className="card-text mb-3 text-center">
              Minimum Payment: ${minimum.toFixed(2)}
            </div>
            <form>
              <input
                className="form-control mb-2"
                type="number"
                placeholder="Enter amount"
              />
              <div className="text-center">
                <button
                  className="btn btn-success px-3 me-2"
                  onClick={makePayment}
                >
                  Pay
                </button>
              </div>
            </form>
            <button
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Modal from "react-modal";

function Loan(props) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
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
    <div className="loan">
      <h1>{props.loanType}</h1>
      <div>Loan Amount: {props.loanAmount}</div>
      <div>Loan Term: {props.loanTerm} months</div>
      <div>Amount Paid: {props.amountPaid}</div>
      <div>Next payment due: {props.nextPayment}</div>
      <button onClick={openModal}>Make Payment</button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Make Payment</h2>
        <div>Minimum Payment: $50</div>
        <form>
          <input type="text" placeholder="Enter amount" />
          <button onClick={makePayment}>Pay</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default function Payments() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/getLoans`, {
      body: JSON.stringify({
        UserID: JSON.parse(localStorage.getItem("userInfo"))[0].userid,
      }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setLoans(data));
  }, []);
  return (
    <div class="d-flex z-0 flex-wrap justify-content-center">
      {loans.length ? (
        loans.map((loan) => {
          return (
            <Loan
              loanID={loan.loanid}
              loanType={loan.loan_type}
              loanAmount={loan.loan_amount}
              loanTerm={loan.loan_term}
              amountPaid={loan.amount_paid}
              nextPayment={"30 Days"}
            />
          );
        })
      ) : (
        <h1>No loans found</h1>
      )}
      <style jsx>
        {`
          .loan {
            margin-top: 50px;
            border: 1px solid #000;
            padding: 20px;
            background-color: #e2d2b6;
            border-radius: 10px;
            width: 300px;
            margin: 10px;
          }
          .loan button {
            border-radius: 10px;
            padding: 5px;
            background-color: #182d09;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

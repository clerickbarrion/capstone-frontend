import React from "react";
import Modal from "react-modal";

export default function Loan(props) {
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
    <div>
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
      <style jsx>{`
      .loan {
        margin-top: 50px;
        border: 1px solid #000;
        padding: 20px;
        background-color: #E2D2B6;
        border-radius: 10px;
        width: 300px;
        margin: 10px;
      }
      .loan button {
        border-radius: 10px;
        padding: 5px;
        background-color: #182D09;
        color: white;
      }
      `}</style>
    </div>
  );
}

import React, {useState, useEffect} from 'react'
import Modal from 'react-modal'

function countdown(endDate) {
    const today = new Date()
    const time = endDate - today
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((time % (1000 * 60)) / 1000)
    return `${days}d ${hours}h ${minutes}m ${seconds}s`
}

function Loan(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [endDate, setEndDate] = useState(new Date())
  const [timeLeft, setTimeLeft] = useState(countdown(new Date(props.endDate)))
  const minimum = (props.loanAmount / props.loanTerm)

  useEffect(()=>{
      setInterval(()=>setTimeLeft(countdown(new Date(props.endDate))),1000)
  },)

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  function makePayment(e) {
    fetch(`https://loaniq-server.glitch.me/makePayment`, {
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
    <div
      className="loan card"
      style={{ width: "18rem", margin: "10px", backgroundColor: "#e2d2b6" }}
    >
      <div className="card-header fs-4 text-center">
        <strong>{props.loanType}</strong>
      </div>
      <div className="card-body">
        <div className="card-text mb-2 fs-6">
          Loan Amount: {props.loanAmount}
        </div>
        <div className="card-text mb-2">Loan Term: {props.loanTerm} months</div>
        <div className="card-text mb-2">Amount Paid: {props.amountPaid}</div>
        <div className="card-text mb-2">
          Next payment due: {timeLeft}
        </div>
        <div className="text-center">
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
          <button
            className="btn btn-danger position-absolute top-0 end-0 m-2"
            onClick={closeModal}
          >
            Close
          </button>
          <h2 className="card-header mb-3 text-center">
            <strong>Make Payment</strong>
          </h2>
          <div className="card-text mb-3 text-center">Minimum Payment: ${minimum.toFixed(2)}</div>
          <div className="card-text mb-3 text-center">End date: {String(new Date(props.endDate))}</div>
          <form>
            <input
              type="text"
              placeholder="Enter amount"
              className="form-control mb-2"
            />
            <div className="button-container text-center">
              <button
                className="btn btn-success px-3 me-2"
                onClick={makePayment}
              >
                Pay
              </button>
            </div>
          </form>
        </div>
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
      {loans.length ? loans.map(loan => {
        return <Loan loanID={loan.loanid} loanType={loan.loan_type} loanAmount={loan.loan_amount} loanTerm={loan.loan_term} amountPaid={loan.amount_paid} endDate={Number(new Date(loan.applyDate)) + (Number(loan.loan_term) * 2629800000)} nextPayment={"30 Days"}/>
      }) : <h1>No loans found</h1>}
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

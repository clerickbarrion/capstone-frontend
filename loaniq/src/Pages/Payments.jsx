import React from 'react'
import Modal from 'react-modal'

function Loan(props) {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const openModal = () => {setModalIsOpen(true)}
    const closeModal = () => {setModalIsOpen(false)}
  return (
    <div className='loan'>
        <h1>{props.loanType} Loan</h1>
        <div>Loan Amount: {props.loanAmount}</div>
        <div>Loan Term: {props.loanTerm}</div>
        <div>Amount Paid: {props.amountPaid}</div>
        <div>Next payment due: {props.nextPayment}</div>
        <button onClick={openModal}>Make Payment</button>
        
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <h2>Make Payment</h2>
            <div>Minimum Payment: $50</div>
            <form>
                <input type="text" placeholder="Enter amount" />
                <button>Pay</button>
            </form>
            <button onClick={closeModal}>Close</button>
        </Modal>
    </div>
    
  )
}

export default function Payments() {
  return (
    <div>
      <Loan loanType={"Personal"} loanAmount={1000} loanTerm={12} amountPaid={500} nextPayment={"30 days"}/>
      <Loan loanType={"Personal"} loanAmount={1000} loanTerm={12} amountPaid={500} nextPayment={"30 days"}/>
      <style jsx>
        {`
          .loan {
            margin-top: 50px;
            border: 1px solid #000;
            padding: 20px;
            background-color: #e2d2b6;
          }
          
        `}
      </style>
    </div>
  )
}

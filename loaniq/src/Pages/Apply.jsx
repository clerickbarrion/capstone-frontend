import React, { useEffect, useState, useRef } from "react";
import LoanForm from "../Components/LoanForm";
import IncomeForm from "../Components/IncomeForm";

export default function Apply() {
  const [step, setStep] = useState(1);
  const backBtn = useRef(null);
  const nextBtn = useRef(null);
  const submitBtn = useRef(null);

  useEffect(() => {
    document.querySelector(".loanForm").style.display = "none";
    submitBtn.current.style.display = "none";
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const submission = {
      creditScore: e.target[0].value,
      income: e.target[1].value,
      expenses: e.target[2].value,
      loanType: e.target[3].value,
      loanAmount: e.target[4].value,
      loanLength: e.target[5].value,
      incomeDebtRatio: e.target[1].value / e.target[2].value
    }
    fetch('http://localhost:4000/api/evaluateLoan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submission)
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
    }

  function showStep1() {
    document.querySelector(".loanForm").style.display = "none";
    document.querySelector(".incomeForm").style.display = "block";
    backBtn.current.style.display = "none";
    nextBtn.current.style.display = "block";
    submitBtn.current.style.display = "none";
  }

  function showStep2() {
    document.querySelector(".loanForm").style.display = "block";
    document.querySelector(".incomeForm").style.display = "none";
    nextBtn.current.style.display = "none";
    backBtn.current.style.display = "block";
    submitBtn.current.style.display = "block";
  }

  useEffect(() => {
    if (step === 1) showStep1();
    else showStep2();
  }, [step]);

  return (
    <div class="container">
      <div class="row mb-5">
        <div class="col">
          <button class="step-btn w-100" onClick={() => showStep1()}>
            Your Information
          </button>
        </div>
        <div class="col">
          <button class="step-btn w-100" onClick={() => showStep2()}>
            Loan Information
          </button>
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <IncomeForm />
        <LoanForm />
        <button
          type="button"
          ref={backBtn}
          class="float-start"
          onClick={() => setStep(1)}
        >
          Back
        </button>
        <button
          type="button"
          ref={nextBtn}
          class="float-end"
          onClick={() => setStep(2)}
        >
          Next
        </button>
        <button type="submit" ref={submitBtn} class="float-end">
          Submit
        </button>
      </form>
      <style jsx>{`
        .step-btn {
          background-color: transparent;
          border: none;
          border-bottom: 1px solid black;
        }
      `}</style>
    </div>
  );
}

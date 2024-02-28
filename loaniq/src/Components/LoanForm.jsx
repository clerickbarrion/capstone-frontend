import React from "react";
// loanType, loanAmount, loanLength
// 24, 36, 48, 60, 72 and 84

export default function LoanForm() {
  return (
    <div class="loanForm">
      <label class="mb-2">Select your desired loan type:</label>
      <select class="form-select mb-4" aria-label="Default select example">
        <option value="Personal Loan">Personal Loan</option>
        <option value="Auto Loan">Auto Loan</option>
        <option value="Mortgage">Mortgage Loan</option>
      </select>
      <label class="mb-2">Enter your desired loan amount:</label>
      <div class="form-floating mb-4">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="Monthly Income"
        />
        <label class="text-muted" for="floatingInput">
          Loan Amount
        </label>
      </div>
      <label class="mb-2">Select your desired loan term:</label>
      <select class="form-select mb-4" aria-label="Default select example">
        <option value="24">24 months</option>
        <option value="36">36 months</option>
        <option value="48">48 months</option>
        <option value="60">60 months</option>
        <option value="72">72 months</option>
        <option value="84">84 months</option>
      </select>
    </div>
  );
}

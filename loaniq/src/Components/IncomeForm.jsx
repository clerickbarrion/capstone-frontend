import React, { useEffect, useState, useRef } from "react";

export default function IncomeForm(props) {    
  const creditScoreInput = useRef(350);
  const [creditScore, setCreditScore] = useState(
    creditScoreInput.current.value
  );

  return (
    <div class="incomeForm">
      <div class="row">
        <div class="col-md-12">
          <label class="mb-2">
            <h4>Enter your credit score here</h4>
          </label>
          <div class="form-floating mb-4">
            <input
              type="range"
              class="form-range"
              min="300"
              max="850"
              id="creditScoreInput"
              ref={creditScoreInput}
              onChange={() => {
                setCreditScore(creditScoreInput.current.value);
              }}
            />
            <p>Credit Score: {creditScore}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label class="mb-2">
            <h4>Enter your average monthly income here</h4>
          </label>
          <div class="form-floating mb-4">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder="Monthly Income"
              name="Monthly Income"
              onChange={props.isValid}
            />
            <label class="text-muted" for="floatingInput">
              Monthly income...
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <label class="mb-2">
            <h4>Enter your average monthly expenses here</h4>
          </label>
          <div class="form-floating mb-4">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder="Monthly Expenses"
              name="Monthly Expenses"
              onChange={props.isValid}
            />
            <label class="text-muted" for="floatingInput">
              Monthly expenses...
            </label>
          </div>
        </div>
      </div>
      <style jsx>{`
        input[type="range"]::-webkit-slider-runnable-track {
          background: #c5b4a0;
        }

        input[type="range"]::-webkit-slider-thumb {
          background: #a18c7d;
        }
      `}</style>
    </div>
  );
}

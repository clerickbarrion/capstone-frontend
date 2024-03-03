import React from "react";
import LoanCard from "./LoanCard";
import UserLoanCard from "./UserLoanCard";

export default function LoanCardGrid() {
  return (
    <div class="d-flex z-0 flex-wrap">
      <UserLoanCard loanAmt="$30,000" loanType="Auto Loan" loanTerm="72 months" reviewState="Approved"/>
      <UserLoanCard loanAmt="$100,000" loanType="Mortgage Loan" loanTerm="32 months" reviewState="Denied"/>
      <UserLoanCard loanAmt="$10,000" loanType="Personal Loan" loanTerm="36 months" reviewState="Under Review"/>
      
      <style jsx>{`
        .loanCard {
          transition: transform 0.2s;
        }

        .loanCard:hover {
          transform: scale(1.03);
          transition: transform 0.2s;
        }
      `}</style>
    </div>
  );
}

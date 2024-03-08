import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoanCard from "./LoanCard";
import UserLoanCard from "./UserLoanCard";
import AssignedLoanCard from "./AssignedLoanCard";
import Loan from "./Loan";

export default function LoanCardGrid(props) {
  const location = useLocation();
  const [reviewLoans, setReviewLoans] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [userPayments, setUserPayments] = useState([]);
  const [assignedLoans, setAssignedLoans] = useState([]);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userID, setUserID] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))[0].userid
      : ""
  );

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userInfo"))) {
      setIsUser(true);
      setUserID(JSON.parse(localStorage.getItem("userInfo"))[0].userid);
      if (
        JSON.parse(localStorage.getItem("userInfo"))[0].usertype === "admin"
      ) {
        setIsAdmin(true);
      }
    }
    fetch("http://localhost:4000/reviewLoan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setReviewLoans(data);
        console.log(data);
      })
      .catch((error) => console.log("error", error));

    fetch("http://localhost:4000/loaninfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UserID: userID }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoanData(data);
        console.log(data);
      })
      .catch((error) => console.log("error", error));

    fetch("http://localhost:4000/assignedLoans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ AdminID: userID }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAssignedLoans(data);
        console.log(data);
      })
      .catch((error) => console.log("error", error));

    fetch("http://localhost:4000/getLoans", {
      body: JSON.stringify({ UserID: userID }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then((data) => setUserPayments(data))
  }, []);

  return (
    <div class="d-flex z-0 flex-wrap justify-content-center">
      {isUser &&
      location.pathname === "/user/dashboard" &&
      props.selectGrid === "My Loans" ? (
        loanData.map((loan) => (
          <UserLoanCard
            key={loan.EvaluationID}
            loanID={loan.EvaluationID}
            loanType={loan.loanType}
            loanAmt={loan.loanAmount}
            loanTerm={loan.loanLength}
            riskLevel={loan.riskLevel}
            creditScore={loan.creditScore}
            monthlyIncome={loan.income}
            monthlyExpenses={loan.expenses}
            reviewState={loan.LoanStatus}
          />
        ))
      ) : isAdmin &&
        location.pathname === "/admin/dashboard" &&
        props.selectGrid === "All Loans" ? (
        reviewLoans.map((loan) => (
          <LoanCard
            key={loan.EvaluationID}
            loanID={loan.EvaluationID}
            loanAmt={loan.loanAmount}
            loanType={loan.loanType}
            loanTerm={loan.loanLength}
            riskLevel={loan.riskLevel}
            riskReason={loan.reason}
            clientID={loan.UserID}
          />
        ))
      ) : isAdmin &&
        location.pathname === "/admin/dashboard" &&
        props.selectGrid === "Assigned Loans" ? (
        assignedLoans.map((loan) => (
          <AssignedLoanCard
            key={loan.loanid}
            loanID={loan.loanid}
            amtPaid={loan.amount_paid}
            loanAmt={loan.loan_amount}
            loanTerm={loan.loan_term}
            loanType={loan.loan_type}
            clientID={loan.userid}
          />
        ))
      ) : isUser &&
        location.pathname === "/user/dashboard" &&
        props.selectGrid === "My Payments" ? (
        userPayments.length ? (
          userPayments.map((loan) => {
            return (
              <Loan loanID={loan.loanid} 
              loanType={loan.loan_type} 
              loanAmount={loan.loan_amount} 
              loanTerm={loan.loan_term} 
              amountPaid={loan.amount_paid}
              applyDate={loan.applyDate} 
              endDate={Number(new Date(loan.applyDate)) + (Number(loan.loan_term) * 2629800000)} 
              nextPayment={"30 Days"}/>
            );
          })
        ) : (
          <h1>No loans found</h1>
        )
      ) : null}
      
    </div>
  );
}

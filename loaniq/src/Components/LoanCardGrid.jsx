import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoanCard from "./LoanCard";
import UserLoanCard from "./UserLoanCard";

export default function LoanCardGrid(props) {
  const location = useLocation();
  const [reviewLoans, setReviewLoans] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userID, setUserID] = useState(JSON.parse(localStorage.getItem("userInfo"))[0].userid);

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
        console.log(data)
      })
      .catch((error) => console.log("error", error));

    fetch("http://localhost:4000/loaninfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UserID: userID })
    })
      .then((response) => response.json())
      .then((data) => {
        setLoanData(data);
      })
      .catch((error) => console.log("error", error));
  }, []);


  return (
    <div class="d-flex z-0 flex-wrap justify-content-center">
      {isUser && location.pathname === "/user/dashboard"
        ? loanData
            .map((loan) => (
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
                reviewState={"Under Review"}
              />
            ))
        : isAdmin && location.pathname === "/admin/dashboard"
        ? reviewLoans.map((loan) => (
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
        : null}
    </div>
  );
}

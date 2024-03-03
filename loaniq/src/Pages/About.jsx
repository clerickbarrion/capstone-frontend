import React, { useEffect } from "react";
import Values from "..//Components/values";
import Promise from "../Components/promise";
import MeetTeam from "../Components/MeetTeam";

export default function About({ handlePageChange }) {
  useEffect(() => {
    handlePageChange("about");
  }, [handlePageChange]);

  useEffect(() => {
    document.querySelector(".about-nav-item").style.borderBottom =
      "2px solid #182d09";
  }, []);

  return (
    <div className="About-Us-container">
      <div className="promise-container">
        <Promise />
      </div>
      <div className="values-container">
        <Values />
      </div>
      <div className="meet-the-team-container">
        <MeetTeam />
      </div>

      <style jsx>{`
        .Our-Promise-Statement {
          margin-top: 200px;
        }
        .promise-container {
          margin-top: 250px;
        }
        .values-container {
          margin-top: 405px;
        }
        .meet-the-team-container {
          margin-top: 200px;
          margin-bottom: 250px;
        }
        .box {
          border-radius: 15px;
        }

        .Our-Values-Statement {
          margin-top: 150px;
        }

        .row {
          margin-top: 100px;
        }

        .box {
          border: 1px solid #ccc;
          padding: 20px;
          height: 300px;
          text-align: center;
          margin: 0 50px;
        }
      `}</style>
    </div>
  );
}

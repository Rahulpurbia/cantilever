import React from "react";
import "./OutcomeStatistics.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const statistics = [
  {
    label: "Shopping",
    percentage: 52,
    background: "linear-gradient(270deg, #FCAE73 0%, #F79042 99.18%)",
  },
  {
    label: "Electronics",
    percentage: 21,
    background: "linear-gradient(90deg, #209D43 0%, #2BC255 100%)",
  },
  { label: "Travels", percentage: 74, background: " #70A6E8" },
];

const OutcomeStatistics = () => {
  return (
    <div className="outcome-statistics">
      <h2>Outcome Statistics</h2>
      {statistics.map((stat, index) => (
        <div className="stat" key={index}>
          <div className="stat-label">
         
          </div>
          <ProgressBar
            backgroundColor={stat.background}
            percentage={`${stat.percentage}%`}
            label={stat.label}
            showPercentage
          />
        </div>
      ))}
    </div>
  );
};

export default OutcomeStatistics;

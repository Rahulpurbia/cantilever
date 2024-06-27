import React from "react";
import "./OutcomeStatistics.css";

const statistics = [
  { label: "Shopping", percentage: 52, color: "#ffcc00" },
  { label: "Electronics", percentage: 21, color: "#28a745" },
  { label: "Travels", percentage: 74, color: "#007bff" },
];

const OutcomeStatistics = () => {
  return (
    <div className="outcome-statistics">
      {statistics.map((stat, index) => (
        <div className="stat" key={index}>
          <div className="stat-label">
            <span
              className="stat-color"
              style={{ backgroundColor: stat.color }}
            ></span>
            <span>{stat.label}</span>
          </div>
          <div
            className="stat-bar"
            style={{
              width: `${stat.percentage}%`,
              backgroundColor: stat.color,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default OutcomeStatistics;

// src/components/Goals.js
import React from "react";
import "./Goals.css";

const goals = [
  { amount: 550, date: "12/20/20", label: "Holidays" },
  { amount: 200, date: "12/20/20", label: "Renovation" },
  { amount: 820, date: "12/20/20", label: "Xbox" },
];

const Goals = () => {
  return (
    <div className="goals">
      {goals.map((goal, index) => (
        <div className="goal" key={index}>
          <p>${goal.amount}</p>
          <span>{goal.date}</span>
          <div>{goal.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Goals;

// src/components/Goals.js
import React from "react";
import { Mountain, Brush, Console } from "../../assets";
import "./Goals.css";

const goals = [
  { amount: 550, date: "12/20/20", label: "Holidays", icon: Mountain },
  { amount: 200, date: "12/20/20", label: "Renovation", icon: Brush },
  { amount: 820, date: "12/20/20", label: "Xbox", icon: Console },
];

const Goals = () => {
  return (
    <div className="goals-container">
      <h2>
        <span>Goals</span>
        <span className="plus-icon">
          <span>+</span>
        </span>
      </h2>
      <div className="goals">
        {goals.map((goal, index) => (
          <div className="goal" key={index}>
            <p>${goal.amount}</p>
            <span>{goal.date}</span>
            <div>
              <img src={goal.icon} />
              <span>{goal.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;

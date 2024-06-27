// src/components/Cards.js
import React from "react";
import "./Cards.css";
import Card from "../Card/Card";
import ProgressBar from "../ProgressBar/ProgressBar";
import ToggleButton from "../ToggleButton/ToggleButton";

const Cards = () => {
  return (
    <div className="cards">
      <h2 className="cards-title">Cards</h2>
      <div className="cards-first-section">
        <div className="card-wrapper">
          <Card />
          <div>
            <ProgressBar percentage="25%" />
            <div className="progress-details">
              <span>Weekly payment limit</span>
              <span>$350.60 / $4000</span>
            </div>
          </div>
        </div>
        <div className="balance-details">
          <div className="current-balance balance">
            <div className="value">
              <span>$</span>
              <span>2850.75</span>
            </div>
            <div className="label">Current balance</div>
          </div>
          <div className="income balance">
            <div className="value">
              <span>$</span>
              <span>1500.75</span>
            </div>
            <div className="label">Income</div>
          </div>
          <div className="outcome balance">
            <div className="value">
              <span>$</span>
              <span>350.75</span>
            </div>
            <div className="label">Outcome</div>
          </div>
          <div className="balance">
            <ToggleButton />
            <div className="label">Deactivate Card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

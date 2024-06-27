// src/components/Card.js
import React from "react";
import "./Card.css";
import { Logo } from "../../assets";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">cloudcash</div>
        <span className="card-subtitle">PREMIUM ACCOUNT</span>
      </div>
      <div className="card-body">
        <div className="card-number">
          <span>5789</span>
          <span>****</span>
          <span>****</span>
          <span>2847</span>
        </div>
        <div className="card-info">
          <div className="card-info-item">
            <span className="label">Card holder</span>
            <span className="value">Mike Smith</span>
          </div>
          <div className="card-info-item expiry-date">
            <span className="label">Expire date</span>
            <span className="value">06/21</span>
          </div>
          <div className="card-info-item"></div>
        </div>
      </div>
      {/* <div className="cloud-image"></div> */}
    </div>
  );
};

export default Card;

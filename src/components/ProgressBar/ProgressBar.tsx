import React from "react";
import "./ProgressBar.css";

interface Props {
  backgroundColor?: string;
  percentage?: string;
  label?: string;
  showPercentage?: boolean;
}

const ProgressBar = ({
  backgroundColor,
  percentage,
  label,
  showPercentage,
}: Props) => {
  return (
    <>
      <div className="progress-bar-container">
        <div>
          <div className="progress-bar">
            <div
              className="progress-indicator"
              style={{
                width: percentage ?? "100%",
                background: backgroundColor ?? "#197BBD",
              }}
            ></div>
          </div>
          {label && <div className="progressbar-label"> {label}</div>}
        </div>
        {showPercentage && <span className="percentage">{percentage}</span>}
      </div>
    </>
  );
};

export default ProgressBar;

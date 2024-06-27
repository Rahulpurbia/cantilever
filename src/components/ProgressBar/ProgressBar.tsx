import React from "react";
import "./ProgressBar.css";

interface Props {
  backgroundColor?: string;
  percentage?: string;
}

const ProgressBar = ({ backgroundColor, percentage }: Props) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-indicator"
        style={{
          width: percentage ?? "100%",
          backgroundColor: backgroundColor ?? "#197BBD",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;

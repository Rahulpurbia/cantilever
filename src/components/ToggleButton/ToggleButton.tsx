// src/components/ToggleButton.js
import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`toggle-switch ${isOn ? "on" : "off"}`}
      onClick={handleToggle}
    >
      <div className="toggle-handle"></div>
    </div>
  );
};

export default ToggleButton;

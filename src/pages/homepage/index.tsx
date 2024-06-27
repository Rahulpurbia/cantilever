import React from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar/Sidebar";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="outer-wrapper">
      <div className="dashboard-wrapper">
        <Sidebar />
      </div>
    </div>
  );
};

export default Homepage;

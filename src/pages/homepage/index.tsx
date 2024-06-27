import React from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Goals from "../../components/Goals/Goals";
import OutcomeStatistics from "../../components/OutcomStatistics/OutcomeStatistics";
import TransactionHistory from "../../components/TransactionHistory/TransactionHistory";
import NewTransaction from "../../components/NewTransaction/NewTransaction";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="outer-wrapper">
      <div className="dashboard-wrapper">
        <div className="">
          <Sidebar />
        </div>
        <div className="content">
          <Header />
          {/* <Cards /> */}
          {/* <Goals /> */}
          {/* <OutcomeStatistics /> */}
          <NewTransaction />
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

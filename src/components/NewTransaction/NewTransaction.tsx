import React from "react";
import "./NewTransaction.css";
import { GetLoanCard, UserIcon } from "../../assets";
import TextField from "../TextField/TextField";

const transactions = [
  {
    name: "John Doe",
    icon: UserIcon,
  },
  {
    name: "Rahul ",
    icon: UserIcon,
  },
  {
    name: "Sanjay",
    icon: UserIcon,
  },
  {
    name: "Manish",
    icon: UserIcon,
  },
  {
    name: "Sean",
    icon: UserIcon,
  },
];

const NewTransaction = () => {
  return (
    <div className="new-transaction-wrapper">
      <div className="left-section">
        <h2>New transactions</h2>
        <div className="transactions-list-container">
          <div className="transactions-list">
            {transactions.map((transaction, index) => {
              return (
                <div key={transaction.name} className="user-profile">
                  <img
                    className="user-icon"
                    src={transaction.icon}
                    alt={transaction.name}
                  />
                  <span>{transaction.name}</span>
                </div>
              );
            })}
          </div>
          <div className="add-more">
            <div></div>
            <button className="add-icon">
              <span>+</span>
            </button>
            <span>Add More</span>
          </div>
        </div>
        <div className="transfer-money">
          <TextField placeholder="0" />
          <button className="send-transfer-button">Send the transfer</button>
        </div>
      </div>
      <div className="right-section">
        <img src={GetLoanCard} alt="get-loan-card" />
      </div>
    </div>
  );
};

export default NewTransaction;

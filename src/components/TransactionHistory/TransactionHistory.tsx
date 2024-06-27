// src/components/TransactionHistory.js
import React from "react";
import "./TransactionHistory.css";
import { LeafIcon } from "../../assets";

const transactions = [
  {
    receiver: "Tesco Market",
    type: "Shopping",
    date: "13 Dec 2020",
    amount: "$75.67",
    icon: LeafIcon,
  },
  {
    receiver: "ElectroMen Market",
    type: "Shopping",
    date: "13 Dec 2020",
    amount: "$250.00",
    icon: LeafIcon,
  },
  {
    receiver: "Fiorgio Restaurant",
    type: "Food",
    date: "07 Dec 2020",
    amount: "$19.50",
    icon: LeafIcon,
  },
  {
    receiver: "John Mathew Kayne",
    type: "Shopping",
    date: "06 Dec 2020",
    amount: "$350.00",
    icon: LeafIcon,
  },
  {
    receiver: "Ann Marlin",
    type: "Shopping",
    date: "31 Nov 2020",
    amount: "$430.00",
    icon: LeafIcon,
  },
];

const TransactionHistory = () => {
  return (
    <div className="transaction-history">
      <h2>Transaction history</h2>
      <table>
        <thead>
          <tr>
            <th>Receiver</th>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>
                <span className="history-item-icon">
                  <img src={transaction.icon} alt="icon" />
                </span>
                {transaction.receiver}
              </td>
              <td>{transaction.type}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

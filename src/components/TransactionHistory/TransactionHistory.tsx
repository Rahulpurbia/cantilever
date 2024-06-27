// src/components/TransactionHistory.js
import React from "react";
import "./TransactionHistory.css";

const transactions = [
  {
    receiver: "Tesco Market",
    type: "Shopping",
    date: "13 Dec 2020",
    amount: "$75.67",
  },
  {
    receiver: "ElectroMen Market",
    type: "Shopping",
    date: "13 Dec 2020",
    amount: "$250.00",
  },
  {
    receiver: "Fiorgio Restaurant",
    type: "Food",
    date: "07 Dec 2020",
    amount: "$19.50",
  },
  {
    receiver: "John Mathew Kayne",
    type: "Shopping",
    date: "06 Dec 2020",
    amount: "$350.00",
  },
  {
    receiver: "Ann Marlin",
    type: "Shopping",
    date: "31 Nov 2020",
    amount: "$430.00",
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
              <td>{transaction.receiver}</td>
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

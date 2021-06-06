import React from "react";
import s from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.TransactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td align="center">{amount}</td>
            <td align="center">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export default TransactionHistory;

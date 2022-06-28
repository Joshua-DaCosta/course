import React from "react";
import './ExpenseItem.css';

const ExpenseItem = ({ key, title, amount, date }) => {
  return (
    <div id={key} className="expense-item">
      <div>
        <div>{date}</div>
      </div>
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">{amount}</div>
    </div>
  );
};

export default ExpenseItem;

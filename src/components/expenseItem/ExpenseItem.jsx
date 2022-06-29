import React from "react";
import ExpenseDate from "../expenseDate/ExpenseDate";
import './ExpenseItem.css';

const ExpenseItem = ({ key, title, amount, date }) => {

  

  return (
    <div id={key} className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description"></div>
      <h2>{title}</h2>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
};

export default ExpenseItem;

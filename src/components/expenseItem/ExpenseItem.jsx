import React from "react";
import ExpenseDate from "../expenseDate/ExpenseDate";
import Card from "../card/Card";
import './ExpenseItem.css';

const ExpenseItem = ({ key, title, amount, date }) => {

  

  return (
    <Card id={key} className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description"></div>
      <h2>{title}</h2>
      <div className="expense-item__price">${amount}</div>
    </Card>
  );
};

export default ExpenseItem;

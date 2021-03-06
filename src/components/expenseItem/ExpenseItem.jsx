import React from "react";
import ExpenseDate from "../expenseDate/ExpenseDate";
import Card from "../card/Card";
import './ExpenseItem.css';

const ExpenseItem = ({title, amount, date }) => {


  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description"></div>
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
